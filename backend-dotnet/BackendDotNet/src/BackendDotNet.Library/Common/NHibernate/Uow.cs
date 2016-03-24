using System;
using System.Data;
using NHibernate;

namespace BackendDotNet.Common.NHibernate {
	public class Uow : IUow {

		private readonly ISessionFactory sessionFactory;
		private readonly ITransaction transaction;

		public ISession Session { get; private set; }
		public Boolean RollBackOnDispose { get; set; }
		public Boolean CommitOnDispose { get; set;}

		public Uow(ISessionFactory sessionFactory) {
			this.sessionFactory = sessionFactory;
			this.Session = sessionFactory.OpenSession ();
			this.Session.FlushMode = FlushMode.Auto;
			this.transaction = Session.BeginTransaction (IsolationLevel.ReadCommitted);
		}

		public Uow( ISession session ) {
			this.Session = session;
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
			if (Session.IsOpen) {
				if (RollBackOnDispose) {
					this.Rollback ();
				}

				if (CommitOnDispose) {
					this.Commit ();
				}
				Session.Close ();
			}
		}
	}
}

