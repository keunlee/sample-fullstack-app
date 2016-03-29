using System;
using NHibernate;
using Driver = NHibernate.Driver;

namespace BackendDotNet.Common.NHibernate.Drivers {
	/// <summary>
	/// Mono SQlite driver.
	/// 
	/// sample cfg.xml
	/// 
	///	<?xml version="1.0" encoding="UTF-8" ?>
	///	<hibernate-configuration xmlns="urn:nhibernate-configuration-2.2">
	///		<session-factory>
	///			<property name="connection.provider">NHibernate.Connection.DriverConnectionProvider</property>
	///			<property name="dialect">NHibernate.Dialect.SQLiteDialect</property>
	///			<property name="connection.driver_class">BackendDotNet.Common.NHibernate.Drivers.MonoSQLiteDriver, BackendDotNet.Library</property>
	///			<property name="connection.connection_string">data source=:memory:</property>
	///			<property name="show_sql">true</property>
	///		</session-factory>
	///	</hibernate-configuration>
	/// </summary>
	public class MonoSQLiteDriver : Driver.ReflectionBasedDriver  {
		public MonoSQLiteDriver() 
			: base(
				"Mono.Data.Sqlite",
				"Mono.Data.Sqlite",  
				"Mono.Data.Sqlite.SqliteConnection",  
				"Mono.Data.Sqlite.SqliteCommand")  {  
		}

		public override bool UseNamedPrefixInParameter {  
			get {  
				return true;  
			}  
		}  

		public override bool UseNamedPrefixInSql {  
			get {  
				return true;  
			}  
		}  

		public override string NamedPrefix {  
			get {  
				return "@";  
			}  
		}  

		public override bool SupportsMultipleOpenReaders {  
			get {  
				return false;  
			}  
		}  
	}
}

