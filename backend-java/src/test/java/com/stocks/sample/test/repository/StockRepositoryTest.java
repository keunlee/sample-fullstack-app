package com.stocks.sample.test.repository;

import com.stocks.sample.domain.Stock;
import com.stocks.sample.repository.StockRepository;
import com.stocks.sample.test.AbstractTestConfiguration;
import org.junit.Assert;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public class StockRepositoryTest extends AbstractTestConfiguration {
    private static final Logger logger = LoggerFactory.getLogger(StockRepositoryTest.class);

    @Autowired
    private StockRepository stockRepository;

    @Test
    @Rollback(value = true)
    @Transactional
    public void testCreateStock() {
        Stock stock = new Stock();
        stock.setName("TEST");
        stock = stockRepository.saveAndFlush(stock);
        stock = stockRepository.findOne(stock.getId());
        Assert.assertNotNull(stock.getId());
    }

    @Test
    @Rollback(value = true)
    @Transactional
    public void testFindByWildCard() {
        Stock stock = new Stock();
        stock.setName("AAL");
        stockRepository.saveAndFlush(stock);

        stock = new Stock();
        stock.setName("AAP");
        stockRepository.saveAndFlush(stock);

        List<Stock> stocks = stockRepository.findByWildCard("AA%");

        Assert.assertNotNull(stocks.size() >= 2);
    }
}
