using System;
using BackendDotNet.Domain;

namespace BackendDotNet.Dto {
	public class StockDto {
		public virtual long id { get; set; }
		public virtual string name { get; set; }
		public virtual string symbol { get; set; }

		public StockDto() {}

		public StockDto(Stock entity ) {
			this.id = entity.Id;
			this.name = entity.Name;
			this.symbol = entity.Symbol;
		}
	}
}

