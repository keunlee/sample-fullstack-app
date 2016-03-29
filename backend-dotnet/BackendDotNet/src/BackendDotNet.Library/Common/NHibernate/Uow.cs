using System;
using System.Data;
using NHibernate;

namespace BackendDotNet.Common.NHibernate {
	public class Uow : IUow {

		private ISessionFactory sessionFactory;
		private ITransaction transaction;

		public ISession Session { get; private set; }

		public Uow(ISessionFactory sessionFactory) {
			this.sessionFactory = sessionFactory;
			this.OpenSession ();
		}

		public void OpenSession() {
			this.Session = this.sessionFactory.OpenSession ();
			this.Session.FlushMode = FlushMode.Auto;
			this.transaction = Session.BeginTransaction (IsolationLevel.ReadCommitted);
		}

		public void Commit() {
			if (!transaction.IsActive) {
				throw new InvalidOperationException ("Oops! We don't have an active transaction");
			}
			transaction.Commit ();
		}

		public void Rollback() {
			if (transaction.IsActive) {
				transaction.Rollback ();
			}
		}

		public void Dispose() {
			if (this.Session != null && this.Session.IsOpen) {
				this.Session.Close ();
				Session = null;
			}
		}
	}
}

