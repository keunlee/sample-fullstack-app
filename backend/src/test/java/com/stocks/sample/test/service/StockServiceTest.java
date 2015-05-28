package com.stocks.sample.test.service;

import com.stocks.sample.dto.StockDto;
import com.stocks.sample.service.StockService;
import com.stocks.sample.test.AbstractTestConfiguration;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public class StockServiceTest extends AbstractTestConfiguration {

    @Autowired
    private StockService stockService;

    @Test
    @Rollback(value = true)
    @Transactional
    public void testImportStocksByCSVFile() throws Exception {
        String file = StockServiceTest.class.getResource("/data/amex.csv").getFile();
        List<StockDto> results = stockService.importStocksByCSVFile(file);
        Assert.assertNotNull(results);
        Assert.assertTrue(results.size() > 0);
    }
}
