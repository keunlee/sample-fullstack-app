using System;
using System.Xml;
using System.Diagnostics;
using System.Reflection;
using NHibernate;
using NHibernate.Cfg;
using NHibernate.Cfg.MappingSchema;
using NHibernate.Mapping.ByCode;
using NHibernate.Tool.hbm2ddl;
using BackendDotNet.Common.DepedencyInjection;
using BackendDotNet.Service;
using BackendDotNet.Repository;
using Autofac;

namespace BackendDotNet.Support {
	public class NHibernateHelper {
		private Configuration nhConfiguration;
		private ISessionFactory sessionFactory;
		private AutofacBootStrapper bootStrapper;

		public NHibernateHelper () {
		}

		public void Initialize() {
			SetupOrm ();
			SetupDependencies ();
		} 

		public void doSampleRun() {
			IStockService stockService = bootStrapper.getContainer ().Resolve<IStockService> ();
			// StockRepository stockRepository = bootStrapper.getContainer ().Resolve<StockRepository> ();
			stockService.importStocksByCSVFile ( "/Users/keunsuklee/Clients/KP/sample-fullstack-app/backend-dotnet/BackendDotNet/resources/data/amex.csv" );
		}

		private void SetupDependencies() {
			bootStrapper = new AutofacBootStrapper ();
		}

		private void SetupOrm() {
			nhConfiguration = ConfigureNHibernateFromConfigFile (); // OR ConfigureNHibernate ();
			HbmMapping mapping = GetMappings ();
			nhConfiguration.AddDeserializedMapping (mapping, "NHSchemaTest");
			SchemaMetadataUpdater.QuoteTableAndColumns (nhConfiguration);
			sessionFactory = nhConfiguration.BuildSessionFactory ();
		}

		private Configuration ConfigureNHibernateFromConfigFile() {
			var cfg = new Configuration ();
			cfg.Configure ("hibernate.cfg.xml");
			return cfg;
		}

		private HbmMapping GetMappings () {
			ModelMapper mapper = new ModelMapper ();
			mapper.AddMappings (Assembly.Load ("BackendDotNet.Library").GetTypes ());
			HbmMapping mapping = mapper.CompileMappingForAllExplicitlyAddedEntities ();
			return mapping;
		}
	}
}

