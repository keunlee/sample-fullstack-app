using System;
using BackendDotNet.Common.NHibernate;
using BackendDotNet.Domain;
using NHibernate;
using System.Collections.Generic;

namespace BackendDotNet.Repository {
	public class StockRepository : Repository<long, Stock> {
		public StockRepository (ISession session) : base (session) {
			Console.WriteLine ("BP");
		}
	}
}