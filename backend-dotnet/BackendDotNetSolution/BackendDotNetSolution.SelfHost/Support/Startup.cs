using Owin;
using System.Web.Http;
using System.Web.Http.Dispatcher; 

namespace BackendDotNetSolution.SelfHost.Support
{
    public class Startup
    {
        // This code configures Web API. The Startup class is specified as a type
        // parameter in the WebApp.Start method.
        public void Configuration(IAppBuilder appBuilder)
        {
            // Configure Web API for self-host. 
            HttpConfiguration config = new HttpConfiguration();
            config.Services.Replace(typeof(IAssembliesResolver), new CustomAssembliesResolver());

            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            appBuilder.UseWebApi(config);

            appBuilder.Run((owinContext) =>
            {
                owinContext.Response.ContentType = "text/plain";
                return owinContext.Response.WriteAsync("WEB SERVER IS RUNNING");
            });
        }
    } 
}
