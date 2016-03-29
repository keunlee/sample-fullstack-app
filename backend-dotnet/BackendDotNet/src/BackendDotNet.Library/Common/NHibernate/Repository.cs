using System;
using System.Linq;
using NHibernate;
using NHibernate.Linq;

namespace BackendDotNet.Common.NHibernate {
	public abstract class Repository<TKey, T> : IPersistRepository<T>,IReadOnlyRepository<TKey, T> where T : class, IEntityKey<TKey> {
		public IUow Uow { get; set; }

		protected Repository(IUow uow) {
			this.Uow = uow;
		}
			
		public bool Add(T entity) {
			this.Uow.Session.Save (entity);
			return true;
		}

		public bool Add(System.Collections.Generic.IEnumerable<T> items) {
			foreach (T item in items) {
				this.Uow.Session.Save (item);
			}
			return true;
		}

		public bool Update(T entity) {
			this.Uow.Session.Update (entity);
			return true;
		}

		public bool Delete(T entity) {
			this.Uow.Session.Delete (entity);
			return true;
		}

		public bool Delete(System.Collections.Generic.IEnumerable<T> entities) {
			foreach (T entity in entities) {
				this.Uow.Session.Delete (entity);
			}
			return true;
		}

		public IQueryable<T> All() {
			return this.Uow.Session.Query<T> ();
		}

		public T FindBy(System.Linq.Expressions.Expression<Func<T, bool>> expression) {
			return FilterBy (expression).SingleOrDefault ();
		}

		public IQueryable<T> FilterBy(System.Linq.Expressions.Expression<Func<T, bool>> expression) {
			return All ().Where (expression).AsQueryable ();
		}

		public T FindBy(TKey id) {
			return this.Uow.Session.Get<T> (id);
		}
	}
}
