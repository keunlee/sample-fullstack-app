using System;
using NHibernate;

namespace BackendDotNet.Common.NHibernate {
	public interface IUow : IDisposable {
		ISession Session { get; }
		void Commit ();
		void Rollback ();
		void OpenSession();
	}
}

