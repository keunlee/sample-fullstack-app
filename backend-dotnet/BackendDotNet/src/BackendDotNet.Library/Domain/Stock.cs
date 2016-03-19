using System;
using NHibernate.Mapping.ByCode.Conformist;
using NHibernate.Mapping.ByCode;
using BackendDotNet.Common.NHibernate;

namespace BackendDotNet.Domain {
	public class Stock : IEntityKey<long> {
		public virtual long Id { get; set; }
		public virtual string Industry { get; set;}
		public virtual string IpoYear { get; set;}
		public virtual string LastSale { get; set;}
		public virtual string MarketCap { get; set;}
		public virtual string Name { get; set;}
		public virtual string Sector { get; set;}
		public virtual string Summary { get; set;}
		public virtual string Symbol { get; set;}

		public Stock () {}
	}

	public class StockMap : ClassMapping<Stock> {
		public StockMap() {
			Table("stock");
			Id<long> (x => x.Id, m => {
				m.Column("id");
			});
			Property<string> (x => x.Industry, m => {
				m.Column("industry");
			});
			Property<string> (x => x.IpoYear, m => {
				m.Column("ipoyear");
			});
			Property<string> (x => x.LastSale, m => {
				m.Column("lastsale");
			});
			Property<string> (x => x.MarketCap, m => {
				m.Column("marketcap");
			});
			Property<string> (x => x.Name, m => {
				m.Column("name");
			});
			Property<string> (x => x.Sector, m => {
				m.Column("sector");
			});
			Property<string> (x => x.Summary, m => {
				m.Column("summary");
			});
			Property<string> (x => x.Symbol, m => {
				m.Column("symbol");
			});
		}
	}
}

