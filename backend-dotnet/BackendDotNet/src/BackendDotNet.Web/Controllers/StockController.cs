using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using BackendDotNet.Service;

namespace BackendDotNet.Controllers {
	
	public class StockController : Controller {
		private IStockService stockService;

		public StockController( IStockService stockService ) {
			this.stockService = stockService;
		}

		[Route("service/stocks"), HttpGet]
		public dynamic findStocksByWildCard( [FromQuery] string q ) {
			var stocks = this.stockService.findStocksByWildCard (q);
			return stocks;
		}

		[Route("service/stockhistory/{symbol}"), HttpGet]
		public dynamic getHistoricalStockData( [FromRoute] string symbol ) {
			var stockData = this.stockService.getHistoricalStockData (symbol);
			return stockData;
		}
	}
}

