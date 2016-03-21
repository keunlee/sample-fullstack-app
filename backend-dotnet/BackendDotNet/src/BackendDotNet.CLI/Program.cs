using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using BackendDotNet.Support;
using CommandLine;

namespace BackendDotNet {
	public class Program {
		public static void Main(string[] args) {
			var result = CommandLine.Parser.Default.ParseArguments<CLIOptions> (args);

			result.MapResult (o => {
				var fullPath = Path.GetFullPath( o.InputFile );
				if ( File.Exists( fullPath )) {
					
				}
				return 0;
			}, errs => 1);
		}
	}
}
