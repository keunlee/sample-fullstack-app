using System;
using System.Collections.Generic;
using BackendDotNet.Dto;
using BackendDotNet.Common.NHibernate;

namespace BackendDotNet.Service {
	public interface IStockService {
		IList<StockDto> ImportStocksByCSVFile(string file);
		List<StockDto> findStocksByWildCard(string phrase);
	}
}

