using System;
using BackendDotNet.Common.DepedencyInjection;

namespace BackendDotNet.Tests {
	public class StockServiceTestFixture : IDisposable {
		public AutofacBootStrapper BootStrapper { get; private set; }

		public StockServiceTestFixture () {
			SetUp ();
		}

		private void SetUp() {
			BootStrapper = new AutofacBootStrapper ();
		}
			
		public void Dispose() {
		}
	}
}

