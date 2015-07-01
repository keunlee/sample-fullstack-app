using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Dispatcher;

namespace BackendDotNetSolution.SelfHost.Support
{
    public class CustomAssembliesResolver : DefaultAssembliesResolver
    {
        public override ICollection<System.Reflection.Assembly> GetAssemblies()
        {
            var assemblies = base.GetAssemblies();

            var assemblyLoadList = ConfigurationManager.GetSection("assemblyLoadList") as NameValueCollection;
            foreach (var key in assemblyLoadList.AllKeys) 
            {
                string assemblyStringValue = assemblyLoadList.GetValues(key).FirstOrDefault();
                Assembly assembly = Assembly.LoadFrom(assemblyStringValue);
                assemblies.Add(assembly);
            }

            return assemblies;
        }
    }
}
