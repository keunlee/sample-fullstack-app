using Ninject.Modules;

//using BackendDotNet.Library.Service;
//using BackendDotNet.Library.Service.Implementation;

namespace BackendDotNet.Common.Ninject.Modules {
	public class ServiceModule : NinjectModule {
		public ServiceModule () {
		}

		public override void Load() {
//			Bind<IHarvestService> ().To<HarvestService> ();
		}
	}
}
