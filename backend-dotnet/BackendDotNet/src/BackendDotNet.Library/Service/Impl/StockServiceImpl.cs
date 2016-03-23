using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using BackendDotNet.Dto;
using BackendDotNet.Service;
using BackendDotNet.Repository;
using BackendDotNet.Domain;
using CsvHelper;

namespace BackendDotNet.Service.Impl {
	public class StockServiceImpl : IStockService {
		private StockRepository stockRepository;

		public StockServiceImpl ( StockRepository stockRepository ) {
			this.stockRepository = stockRepository;
		}

		#region IStockService implementation

		public IList<StockDto> importStocksByCSVFile(string file) {
			var stocks = new List<StockDto> ();
			var textReader = File.OpenText ( file );  
			var parser = new CsvParser (textReader);
			var rowNumber = 0;

			using (var tx = this.stockRepository.session.BeginTransaction ()) {
				while( true ) {
					var stock = new Stock ();
					var row = parser.Read();

					if (rowNumber == 0) {
						rowNumber++;
						continue;
					} else {
						if (row == null) {
							break;
						} else {
							stock.Symbol = row [0];
							stock.Name = row [1];
							stock.LastSale = row [2];
							stock.MarketCap = row [3];
							stock.IpoYear = row [4];
							stock.Sector = row [5];
							stock.Industry = row [6];
							stock.Summary = row [7];

							this.stockRepository.session.Save ( stock );
							rowNumber++;
						}
					}
				}
				tx.Commit ();

				stocks = this.stockRepository.All ().ToList ().Select (x => new StockDto (x)).ToList ();

				if (tx.IsActive) {
					tx.Rollback ();
				}
			}
				
			return stocks;
		}
			
		#endregion
	}
}

