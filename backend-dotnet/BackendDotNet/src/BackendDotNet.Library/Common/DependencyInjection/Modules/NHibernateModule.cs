using System;
using System.Linq;
using Autofac;
using NHibernate;
using BackendDotNet.Common.NHibernate;

namespace BackendDotNet.Common.DepedencyInjection.Modules {
	public class NHibernateModule : Module  {
		protected override void Load(ContainerBuilder builder) {
			builder.RegisterType<NHibernateSessionFactoryProvider>();
			builder.Register ( c => c.Resolve<NHibernateSessionFactoryProvider>().CreateInstance()).As<ISessionFactory>().SingleInstance();

			builder.RegisterType<ISession> ();
			builder.Register (c => c.Resolve<ISessionFactory> ().OpenSession ()).As<ISession> ().InstancePerDependency ();
		}
	}
}

