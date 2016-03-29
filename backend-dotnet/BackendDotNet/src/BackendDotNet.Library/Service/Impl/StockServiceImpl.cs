using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Transactions;
using BackendDotNet.Common.NHibernate;
using BackendDotNet.Domain;
using BackendDotNet.Dto;
using BackendDotNet.Repository;
using BackendDotNet.Service;
using CsvHelper;

namespace BackendDotNet.Service.Impl {
	public class StockServiceImpl : IStockService {
		private StockRepository stockRepository { get; set;}

		public StockServiceImpl ( StockRepository stockRepository ) {
			this.stockRepository = stockRepository;
		}

		public IList<StockDto> ImportStocksByCSVFile(string file) {
			var stocks = new List<StockDto> ();
			var textReader = File.OpenText ( file );  
			var parser = new CsvParser (textReader);
			var rowNumber = 0;

			using( var uow = this.stockRepository.Uow ) {
				uow.OpenSession();

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
				uow.Commit ();
			}

			return stocks;
		}

		public List<StockDto> findStocksByWildCard(string phrase) {
			var stocks = new List<StockDto> ();

			using( var uow = this.stockRepository.Uow ) {
				uow.OpenSession ();

				if (!String.IsNullOrEmpty (phrase)) {
					StringBuilder sb = new StringBuilder ();
					sb.Append (phrase.ToUpper ()).Append ("%");
					string searchPhrase = sb.ToString ();
					stocks = this.stockRepository.FindByWildCard (searchPhrase).ToList().Select( x => new StockDto(x)).ToList();
				}

				uow.Commit ();
			}
							
			return stocks;
		}
	}
}

