using System;
using Autofac;

namespace BackendDotNet.Common.DepedencyInjection {
	public abstract class AbstractAutofacBootStrapper {

		public static ContainerBuilder Builder { get; set; }
		public static IContainer Container { get; set; }

		public AbstractAutofacBootStrapper () {
			CreateBuilder();
		}

		private ContainerBuilder CreateBuilder() {
			Builder = new ContainerBuilder ();
			RegisterDependencyModules ( Builder );
			return Builder;
		}
			
		public ContainerBuilder GetBuilder() {
			return Builder;
		}

		public IContainer GetContainer() {
			if (Container == null) {
				Container = Builder.Build ();
			}
			return Container;
		}

		protected abstract void RegisterDependencyModules( ContainerBuilder builder );
	}
}

