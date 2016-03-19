
namespace BackendDotNet.Common.NHibernate {
	public interface IEntityKey<TKey> {
		TKey Id { get; }
	}
}
