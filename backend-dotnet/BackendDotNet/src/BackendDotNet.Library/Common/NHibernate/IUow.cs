using System;

namespace BackendDotNet.Common.NHibernate {
	public interface IUow : IDisposable {
		void Commit ();
		void Rollback ();
	}
}

