using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Autofac;
using BackendDotNet.Common.DepedencyInjection;
using BackendDotNet.Service;
using BackendDotNet.Service.Impl;
using BackendDotNet.Support;
using CommandLine;

namespace BackendDotNet {
	public class Program {

		public static void Main(string[] args) {
			var bootStrapper = new AutofacBootStrapper ();
			var stockService = bootStrapper.GetContainer ().Resolve<IStockService> ();
			var result = Parser.Default.ParseArguments<CLIOptions> (args);

			result.MapResult (o => {
				var fullPath = Path.GetFullPath( o.InputFile );
				if ( File.Exists( fullPath )) {
					stockService.ImportStocksByCSVFile( fullPath );
				}
				return 0;
			}, errs => 1);
		}
	}
}
