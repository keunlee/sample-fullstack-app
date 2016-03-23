using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using BackendDotNet.Service;
using BackendDotNet.Service.Impl;
using BackendDotNet.Support;
using CommandLine;
using Autofac;

namespace BackendDotNet {
	public class Program {

		public static void Main(string[] args) {
			NHibernateHelper helper = new NHibernateHelper ();
			helper.Initialize ();
			helper.doSampleRun ();
			/*
			var builder = new ContainerBuilder ();
			builder.RegisterType<StockServiceImpl> ().As<IStockService> ();
			Container = builder.Build();

			var result = CommandLine.Parser.Default.ParseArguments<CLIOptions> (args);

			result.MapResult (o => {
				var fullPath = Path.GetFullPath( o.InputFile );
				if ( File.Exists( fullPath )) {
					doFileImport( fullPath );
				}
				return 0;
			}, errs => 1);
			*/
		}
	}
}
