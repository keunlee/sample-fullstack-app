using System;
using Autofac;
using BackendDotNet.Common.DepedencyInjection;
using BackendDotNet.Service;

namespace BackendDotNet.Support {
	public class NHibernateHelper {
		
		private AutofacBootStrapper bootStrapper;

		public NHibernateHelper () {
		}

		public void Initialize() {
			SetupDependencies ();
		}

		public void doSampleRun() {
			IStockService stockService = bootStrapper.getContainer ().Resolve<IStockService> ();
			stockService.importStocksByCSVFile (@"/Users/keunsuklee/Clients/KP/sample-fullstack-app/backend-dotnet/BackendDotNet/resources/data/amex.csv");
		}

		private void SetupDependencies() {
			bootStrapper = new AutofacBootStrapper ();
		}
	}
}

