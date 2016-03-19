using System;
using NHibernate;
using NHibernate.Cfg;
using NHibernate.Cfg.MappingSchema;
using NHibernate.Tool.hbm2ddl;
using NHibernate.Mapping.ByCode;
using System.Reflection;

namespace BackendDotNet.Common.Ninject {
	/// <summary>
	/// N hibernate session factory.
	/// </summary>
	public class NHibernateSessionFactory {

		/// <summary>
		/// Initializes a new instance of the <see cref="BackendDotNet.Common.Ninject.NHibernateSessionFactory"/> class.
		/// </summary>
		public NHibernateSessionFactory () {
		}

		/// <summary>
		/// Creates the database schema.
		/// </summary>
		/// <param name="cfg">Cfg.</param>
		public static void CreateDatabaseSchema(Configuration cfg) {
			//This will drop your database, be careful here not to run in production,
			//unless you want to drop your database
			new SchemaExport (cfg).Drop (true, true);
			var schemaExport = new SchemaExport (cfg);
			schemaExport.SetOutputFile ("schema.sql");
			schemaExport.Create (true, true);
		}

		/// <summary>
		/// Gets the session factory.
		/// </summary>
		/// <returns>The session factory.</returns>
		public ISessionFactory GetSessionFactory() {
			Configuration cfg = ConfigureNHibernateFromConfigFile (); // OR ConfigureNHibernate ();
			HbmMapping mapping = GetMappings ();
			cfg.AddDeserializedMapping (mapping, "Tahzoo.ERP.Harvest.ServiceLibrary.Schema");
			SchemaMetadataUpdater.QuoteTableAndColumns (cfg);
			ISessionFactory sessionFactory = cfg.BuildSessionFactory ();

			return sessionFactory;
		}

		/// <summary>
		/// Configures the N hibernate from config file.
		/// </summary>
		/// <returns>The N hibernate from config file.</returns>
		private Configuration ConfigureNHibernateFromConfigFile() {
			var cfg = new Configuration ();
			cfg.Configure ();
			return cfg;
		}

		/// <summary>
		/// Gets the mappings.
		/// </summary>
		/// <returns>The mappings.</returns>
		private HbmMapping GetMappings() {
			ModelMapper mapper = new ModelMapper ();
			mapper.AddMappings (Assembly.Load ("Tahzoo.ERP.Harvest.ServiceLibrary").GetTypes ());
			HbmMapping mapping = mapper.CompileMappingForAllExplicitlyAddedEntities ();

			return mapping;
		}
	}
}
