using System;
using System.Reflection;
using System.Linq;
using Autofac;
using BackendDotNet.Common.NHibernate;
using BackendDotNet.Service;
using BackendDotNet.Service.Impl;

namespace BackendDotNet.Common.DepedencyInjection.Modules {
	public class ServiceModule : Autofac.Module {
		protected override void Load(ContainerBuilder builder) {
			builder.RegisterAssemblyTypes(Assembly.Load("BackendDotNet.Library"))
				.Where(t => t.Name.EndsWith("Repository"))
				.AsSelf()
				.InstancePerLifetimeScope();
			
			builder.RegisterType<StockServiceImpl> ().As<IStockService> ();
		}
	}
}

