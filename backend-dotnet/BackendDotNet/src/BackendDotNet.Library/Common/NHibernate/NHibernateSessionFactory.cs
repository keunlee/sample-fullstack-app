using System;
using NHibernate;
using NHibernate.Cfg;
using NHibernate.Cfg.MappingSchema;
using NHibernate.Tool.hbm2ddl;
using NHibernate.Mapping.ByCode;
using System.Reflection;

namespace BackendDotNet.Common.NHibernate {
	public class NHibernateSessionFactory {

		public NHibernateSessionFactory () {
		}
			
		public static void CreateDatabaseSchema ( Configuration cfg) {
			//This will drop your database, be careful here not to run in production, 
			//unless you want to drop your database
			new SchemaExport (cfg).Drop (true, true);
			var schemaExport = new SchemaExport (cfg);
			schemaExport.SetOutputFile ("schema.sql");
			schemaExport.Create (true, true);
		}
			
		public ISessionFactory GetSessionFactory() {
			Configuration cfg = ConfigureNHibernateFromConfigFile (); // OR ConfigureNHibernate ();
			HbmMapping mapping = GetMappings ();
			cfg.AddDeserializedMapping (mapping, "BackendDotNet.Library.Schema");
			SchemaMetadataUpdater.QuoteTableAndColumns (cfg);
			ISessionFactory sessionFactory = cfg.BuildSessionFactory ();

			return sessionFactory;
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

