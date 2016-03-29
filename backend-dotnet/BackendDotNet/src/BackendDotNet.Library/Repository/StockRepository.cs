using System;
using BackendDotNet.Common.NHibernate;
using BackendDotNet.Domain;
using NHibernate;
using System.Collections.Generic;

namespace BackendDotNet.Repository {
	public class StockRepository : Repository<long, Stock> {
		public StockRepository (IUow uow) : base (uow) {
		}

		public IList<Stock> FindByWildCard( string phrase ) {
			string query = String.Format( "select s from Stock s where upper(s.Symbol) like upper('{0}') or upper(s.Name) like upper('{0}') order by s.Name asc", phrase );
			return this.Uow.Session.CreateQuery ( query ).List<Stock> ();
		}
	}
}