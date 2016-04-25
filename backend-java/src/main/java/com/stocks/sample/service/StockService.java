package com.stocks.sample.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.stocks.sample.dto.StockDto;

import java.util.List;

public interface StockService {
    List<StockDto> importStocksByCSVFile(String file) throws Exception;

    List<StockDto> findStocksByWildCard(String phrase);

    String getHistoricalStockData( String symbol ) throws JsonProcessingException;
}
