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
			builder.Register (c => c.Resolve<ISessionFactory> ().OpenSession ()).As<ISession> ().InstancePerLifetimeScope ();

			builder.Register(x => new Uow(x.Resolve<ISessionFactory>())).As<IUow>();
			// builder.Register(x => new UnitOfWorkFactory()).As<UnitOfWorkFactory>().SingleInstance();
		}

		/*
		 	builder.RegisterInstance(config).As<Configuration>().SingleInstance();
            builder.RegisterInstance(sessionFactory).As<ISessionFactory>().SingleInstance();
            builder.Register(x => x.Resolve<ISessionFactory>().OpenSession()).As<ISession>().InstancePerLifetimeScope();
            builder.Register(x => new UnitOfWork(x.Resolve<ISessionFactory>())).As<IUnitOfWork>();
            builder.Register(x => new UnitOfWorkFactory()).As<IUnitOfWorkFactory>().SingleInstance();
		 */ 
	}
}

