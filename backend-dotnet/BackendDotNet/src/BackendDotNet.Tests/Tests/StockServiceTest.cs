using System;
using Xunit;
using Autofac;
using BackendDotNet.Service;
using BackendDotNet.Common.NHibernate;
using BackendDotNet.Repository;
using BackendDotNet.Domain;

/// <summary>
/// Stock service test.
/// 
/// TODO: get rollbacks to work for this. transaction rollbacks not working properly. 
/// 
/// </summary>
namespace BackendDotNet.Tests  {
	public class StockServiceTest : IClassFixture<StockServiceTestFixture> {
		private StockServiceTestFixture fixture;
		private IStockService stockService;

		public StockServiceTest( StockServiceTestFixture fixture ) {
			this.fixture = fixture;
			this.stockService = this.fixture.BootStrapper.GetContainer ().Resolve<IStockService> ();
		}
			
		[Fact]
		public void FindStocksByWildCardTest() {
			this.stockService.ImportStocksByCSVFile ( "../../resources/data/amex.csv" );
			var stocks = this.stockService.findStocksByWildCard ("AA");
			Assert.True (stocks.Count > 0);
		}

		[Fact]
		public void BootStrapperTest() {
			var container = this.fixture.BootStrapper.GetContainer ();
			Assert.NotNull (container);
		}

		[Fact]
		public void ResolveUowTest() {
			var uow = this.fixture.BootStrapper.GetContainer ().Resolve<IUow> ();
			Assert.NotNull (uow);
		}
	}
}

