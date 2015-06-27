package com.stocks.sample.service;

import com.stocks.sample.dto.StockDto;

import java.util.List;

public interface StockService {
    List<StockDto> importStocksByCSVFile(String file) throws Exception;

    List<StockDto> findStocksByWildCard(String phrase);
}
