using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using BackendDotNet.Service;

namespace BackendDotNet.Controllers {
	[Route("service/stocks")]
	public class StockController : Controller {
		private IStockService stockService;

		public StockController( IStockService stockService ) {
			this.stockService = stockService;
		}

		public dynamic Get( [FromQuery] string q ) {
			var stocks = this.stockService.findStocksByWildCard (q);
			return stocks;
		}
	}
}

