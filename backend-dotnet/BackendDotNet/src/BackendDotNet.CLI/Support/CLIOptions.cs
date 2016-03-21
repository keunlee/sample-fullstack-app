using System;
using CommandLine;
using CommandLine.Text;

namespace BackendDotNet.Support {
	public class CLIOptions {
		[Option('f', "file", Required = true, HelpText = "Input file to read.")]
		public string InputFile { get; set; }
	}
}
