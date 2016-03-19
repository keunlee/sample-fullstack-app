using System;
using System.Linq;
using NHibernate;
using NHibernate.Linq;

namespace BackendDotNet.Common.NHibernate {
	public abstract class Repository<TKey, T> : IPersistRepository<T>,IReadOnlyRepository<TKey, T> where T : class, IEntityKey<TKey> {

		public virtual ISession session { get; set; }

		public Repository () {
		}

		public Repository (ISession session) {
			this.session = session;
		}

		public bool Add(T entity) {
			this.session.Save (entity);
			return true;
		}

		public bool Add(System.Collections.Generic.IEnumerable<T> items) {
			foreach (T item in items) {
				this.session.Save (item);
			}
			return true;
		}

		public bool Update(T entity) {
			this.session.Update (entity);
			return true;
		}

		public bool Delete(T entity) {
			this.session.Delete (entity);
			return true;
		}

		public bool Delete(System.Collections.Generic.IEnumerable<T> entities) {
			foreach (T entity in entities) {
				this.session.Delete (entity);
			}
			return true;
		}

		public IQueryable<T> All() {
			return this.session.Query<T> ();
		}

		public T FindBy(System.Linq.Expressions.Expression<Func<T, bool>> expression) {
			return FilterBy (expression).SingleOrDefault ();
		}

		public IQueryable<T> FilterBy(System.Linq.Expressions.Expression<Func<T, bool>> expression) {
			return All ().Where (expression).AsQueryable ();
		}

		public T FindBy(TKey id) {
			return this.session.Get<T> (id);
		}
	}
}
