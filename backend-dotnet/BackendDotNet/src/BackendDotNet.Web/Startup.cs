
using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using BackendDotNet;
using BackendDotNet.Core;
using Autofac;
using Autofac.Extensions.DependencyInjection;

namespace BackendDotNet {
	public class Startup {
		public IServiceProvider ConfigureServices(IServiceCollection services) {
			services.AddMvc ();

			// Add Autofac
			var containerBuilder = new ContainerBuilder();
			containerBuilder.RegisterModule<DIModule>();
			containerBuilder.Populate(services);
			var container = containerBuilder.Build();
			return container.Resolve<IServiceProvider>();
		}

		public void Configure(IApplicationBuilder app) {
			app.Run (async (context) => {
				await context.Response.WriteAsync ("Hello World!");
			});
		}

		public static void Main(string[] args) {
			WebApplication.Run<Startup> (args);
		}
	}
}


