using System.Collections.Generic;
using Ninject;
using Ninject.Modules;
using BackendDotNet.Common.Ninject;
using BackendDotNet.Common.Ninject.Modules;

namespace BackendDotNet.Common.Ninject {
	public class NinjectBootStrapper : AbstractNinjectBootStrapper {
		public NinjectBootStrapper () : base () {
		}

		#region implemented abstract members of AbstractNinjectBootStrapper

		protected override void RegisterNinjectModules(IKernel kernel) {
			var modules = new List<INinjectModule> {
				new NHibernateModule (),
				new ServiceModule ()
			};
			kernel.Load (modules);
		}

		#endregion
	}
}
