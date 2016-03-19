using Ninject.Modules;
//using Tahzoo.ERP.Harvest.ServiceLibrary.Service;
//using Tahzoo.ERP.Harvest.ServiceLibrary.Service.Implementation;

namespace BackendDotNet.Common.Ninject.Modules {
	public class ServiceModule : NinjectModule {
		public ServiceModule () {
		}

		public override void Load() {
//			Bind<IHarvestService> ().To<HarvestService> ();
		}
	}
}
