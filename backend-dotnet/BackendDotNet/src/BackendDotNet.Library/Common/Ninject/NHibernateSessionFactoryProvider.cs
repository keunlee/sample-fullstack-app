using System;
using Ninject.Activation;
using NHibernate;

namespace BackendDotNet.Common.Ninject {
	/// <summary>
	/// N hibernate session factory provider.
	/// </summary>
	public class NHibernateSessionFactoryProvider : Provider<ISessionFactory> {
		/// <summary>
		/// Initializes a new instance of the <see cref="BackendDotNet.Common.Ninject.NHibernateSessionFactoryProvider"/> class.
		/// </summary>
		public NHibernateSessionFactoryProvider () {
		}

		/// <summary>
		/// Creates the instance.
		/// </summary>
		/// <returns>The instance.</returns>
		/// <param name="context">Context.</param>
		protected override ISessionFactory CreateInstance(IContext context) {
			var sessionFactory = new NHibernateSessionFactory ();
			return sessionFactory.GetSessionFactory ();
		}
	}
}
