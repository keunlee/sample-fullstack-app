package com.stocks.sample.cli;

import com.stocks.sample.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.core.CommandMarker;
import org.springframework.shell.core.annotation.CliCommand;
import org.springframework.shell.core.annotation.CliOption;
import org.springframework.stereotype.Component;

@Component
public class ImportStocksFromURICommand implements CommandMarker {

    @Autowired
    private StockService stockService;

    @CliCommand(value = "import", help = "import --file <valid file location>")
    public void importStocks(
            @CliOption(key = {"file"}, mandatory = false) String file
    ) {
        try {
            stockService.importStocksByCSVFile(file);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
