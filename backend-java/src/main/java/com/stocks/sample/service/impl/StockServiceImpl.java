package com.stocks.sample.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.opencsv.CSVReader;
import com.stocks.sample.domain.Stock;
import com.stocks.sample.dto.StockDto;
import com.stocks.sample.repository.StockRepository;
import com.stocks.sample.service.StockService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.FileReader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service("stockService")
public class StockServiceImpl implements StockService {
    private static final Logger logger = LoggerFactory.getLogger(StockServiceImpl.class);

    @Autowired
    private StockRepository stockRepository;

    /**
     * @param file
     * @return
     * @throws Exception
     */
    public List<StockDto> importStocksByCSVFile(String file) throws Exception {
        CSVReader reader = new CSVReader(new FileReader(file));
        String[] nextLine = reader.readNext();
        List<Stock> addedStocks = new ArrayList<Stock>();

        while ((nextLine = reader.readNext()) != null) {
            Stock stock = new Stock();

            String symbol = nextLine[0];
            String name = nextLine[1];
            String lastSale = nextLine[2];
            String marketCap = nextLine[3];
            String ipoYear = nextLine[4];
            String sector = nextLine[5];
            String industry = nextLine[6];
            String summaryQuote = nextLine[7];

            List<Stock> stocks = stockRepository.findBySymbol(symbol);
            if (stocks.size() > 1) {
                throw new Exception("there should be only one record for stock symbol: " + symbol);
            } else if (stocks.size() == 1) {
                stock = stocks.get(0);
            }

            stock.setSymbol(symbol);
            stock.setName(name);
            stock.setLastSale(lastSale);
            stock.setMarketCap(marketCap);
            stock.setIpoYear(ipoYear);
            stock.setSector(sector);
            stock.setIndustry(industry);
            stock.setSummary(summaryQuote);

            addedStocks.add(stockRepository.saveAndFlush(stock));

        }
        List<StockDto> results = stockEntitiesToStockDtos(addedStocks);
        return results;
    }

    /**
     * @param phrase
     * @return
     */
    public List<StockDto> findStocksByWildCard(String phrase) {
        List<StockDto> results = new ArrayList<StockDto>();

        if (!StringUtils.isEmpty(phrase) && phrase.length() > 0) {
            StringBuilder sb = new StringBuilder();
            sb.append(phrase.toUpperCase()).append("%");
            String searchPhrase = sb.toString();
            List<Stock> stocks = stockRepository.findByWildCard(searchPhrase);
            results = stockEntitiesToStockDtos(stocks);
        }

        return results;
    }

    /**
     * @param symbol
     * @return
     */
    public String getHistoricalStockData(String symbol) throws JsonProcessingException {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.add(Calendar.DATE, -30);

        Date startDate = cal.getTime();
        Date endDate = new Date();

        SimpleDateFormat formatter = new SimpleDateFormat("YYYY-MM-dd");
        String strStartDate = formatter.format(startDate);
        String strEndDate = formatter.format(endDate);

        String yqlURL = "http://query.yahooapis.com/v1/public/yql?q=";
        String dataFormat = "&format=json&env=store://datatables.org/alltableswithkeys";
        String historicalQ = yqlURL + "select * from yahoo.finance.historicaldata where symbol =\"" + symbol + "\"and startDate=\"" + strStartDate + "\" and endDate=\"" + strEndDate + "\"" + dataFormat;

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(historicalQ, String.class);

        return result;
    }

    /**
     * @param stocks
     * @return
     */
    private List<StockDto> stockEntitiesToStockDtos(List<Stock> stocks) {
        List<StockDto> results = new ArrayList<StockDto>();

        for (Stock stock : stocks) {
            results.add(new StockDto(stock));
        }

        return results;
    }
}
