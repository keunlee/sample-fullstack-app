using NHibernate;
using Ninject;
using Ninject.Modules;

//using BackendDotNet.Common.Ninject;

namespace BackendDotNet.Common.Ninject.Modules {
	public class NHibernateModule : NinjectModule {
		/// <summary>
		/// Load this instance.
		/// </summary>
		public override void Load() {
//			Bind<ISessionFactory>().ToProvider<NHibernateSessionFactoryProvider>().InSingletonScope();
//			Bind<ISession>().ToMethod(context => context.Kernel.Get<ISessionFactory>().OpenSession());
		}
	}
}
