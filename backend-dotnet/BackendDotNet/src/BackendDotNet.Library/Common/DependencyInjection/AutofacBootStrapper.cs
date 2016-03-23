using System;
using Autofac;
using BackendDotNet.Common.DepedencyInjection.Modules;

namespace BackendDotNet.Common.DepedencyInjection {
	public class AutofacBootStrapper : AbstractAutofacBootStrapper {
		#region implemented abstract members of AbstractAutofacBootStrapper

		protected override void RegisterDependencyModules(ContainerBuilder builder) {
			builder.RegisterModule ( new NHibernateModule() );
			builder.RegisterModule (new ServiceModule ());
		}

		#endregion

		public AutofacBootStrapper () : base() {
		}
	}
}

