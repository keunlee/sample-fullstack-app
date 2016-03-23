using System;
using System.Collections.Generic;
using BackendDotNet.Dto;

namespace BackendDotNet.Service {
	public interface IStockService {
		IList<StockDto> importStocksByCSVFile(string file);

		/*
		List<StockDto> importStocksByCSVFile(String file) throws Exception;

		List<StockDto> findStocksByWildCard(String phrase);
		*/
	}
}

