using System;
using Xunit;
using Autofac;
using BackendDotNet.Service;

namespace BackendDotNet.Tests  {
	public class StockServiceTest : IClassFixture<StockServiceTestFixture> {
		private StockServiceTestFixture fixture;
		private IStockService stockService;

		public StockServiceTest( StockServiceTestFixture fixture ) {
			this.fixture = fixture;
			this.stockService = this.fixture.BootStrapper.getContainer ().Resolve<IStockService> ();
		}
			
		[Fact]
		public void ImportFileTest() {
			this.stockService.importStocksByCSVFile ( "../../resources/data/amex.csv" );
			Assert.True (true);
		}
	}
}

