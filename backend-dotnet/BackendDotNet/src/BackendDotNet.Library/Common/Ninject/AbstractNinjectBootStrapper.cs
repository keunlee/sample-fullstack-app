using System;
using Ninject;

namespace BackendDotNet.Common.Ninject {
	public abstract class AbstractNinjectBootStrapper {

		/// <summary>
		/// Gets or sets the kernel.
		/// </summary>
		/// <value>The kernel.</value>
		public static IKernel kernel { get; set; }

		/// <summary>
		/// Initializes a new instance of the <see cref="BackendDotNet.Common.Ninject.AbstractNinjectBootStrapper"/> class.
		/// </summary>
		public AbstractNinjectBootStrapper () {
			CreateKernel ();
		}

		/// <summary>
		/// Creates the kernel.
		/// </summary>
		/// <returns>The kernel.</returns>
		private IKernel CreateKernel() {
			kernel = new StandardKernel ();
			RegisterNinjectModules (kernel);
			return kernel;
		}

		/// <summary>
		/// Gets the kernal.
		/// </summary>
		/// <returns>The kernal.</returns>
		public IKernel getKernal() {
			return kernel;
		}

		/// <summary>
		/// Registers the ninject modules.
		/// </summary>
		/// <param name="kernel">Kernel.</param>
		protected abstract void RegisterNinjectModules(IKernel kernel);
	}
}
