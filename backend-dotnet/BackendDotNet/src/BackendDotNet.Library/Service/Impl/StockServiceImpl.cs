using System;
using System.Collections.Generic;
using System.IO;
using BackendDotNet.Dto;
using BackendDotNet.Service;
using BackendDotNet.Repository;
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

			while( true ) {
				var row = parser.Read();
				if( row == null ) {
					break;
				}
			}

			return stocks;
		}

		#endregion
	}
}

