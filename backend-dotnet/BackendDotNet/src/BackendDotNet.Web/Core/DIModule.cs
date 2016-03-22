using System;
using Autofac;
using Autofac.Extensions.DependencyInjection;

namespace BackendDotNet.Core {
	public class DIModule : Module {
		protected override void Load(ContainerBuilder builder) {
			// builder.RegisterType<CharacterRepository>().As<ICharacterRepository>();
		}
	}
}

