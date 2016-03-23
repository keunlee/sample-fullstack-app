using System;
using NHibernate;
using BackendDotNet.Common.NHibernate;

namespace BackendDotNet.Common.NHibernate {
	public class NHibernateSessionFactoryProvider {
		public NHibernateSessionFactoryProvider () {
		}

		public ISessionFactory CreateInstance() {
			var sessionFactory = new NHibernateSessionFactory ();
			return sessionFactory.GetSessionFactory ();
		}
	}
}

