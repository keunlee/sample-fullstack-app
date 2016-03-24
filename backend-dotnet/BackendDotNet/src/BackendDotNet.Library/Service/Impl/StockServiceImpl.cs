using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Transactions;
using BackendDotNet.Domain;
using BackendDotNet.Dto;
using BackendDotNet.Repository;
using BackendDotNet.Service;
using BackendDotNet.Common.NHibernate;
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

			using (var uow = new Uow (this.stockRepository.session)) {
				uow.CommitOnDispose = true;

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

							this.stockRepository.Add ( stock );
							rowNumber++;
						}
					}
				}

				stocks = this.stockRepository.All ().ToList ().Select (x => new StockDto (x)).ToList ();
			}
				
			return stocks;
		}
			
		#endregion
	}
}

