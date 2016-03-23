using System;
using BackendDotNet.Domain;

namespace BackendDotNet.Dto {
	public class StockDto {
		public virtual long Id { get; set; }
		public virtual string Name { get; set; }
		public virtual string Symbol { get; set; }

		public StockDto() {}

		public StockDto(Stock entity ) {
			this.Id = entity.Id;
			this.Name = entity.Name;
			this.Symbol = entity.Symbol;
		}
	}
}

