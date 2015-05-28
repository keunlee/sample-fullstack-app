package com.stocks.sample.controller;

import com.stocks.sample.dto.StockDto;
import com.stocks.sample.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class StockController {

    @Autowired
    private StockService stockService;

    /**
     * @param q
     * @return
     */
    @ResponseBody
    @RequestMapping(value = {"/service/stocks"}, method = {RequestMethod.GET}, produces = "application/json")
    public List<StockDto> findStocksByWildCard(@RequestParam("q") String q) {
        List<StockDto> stocks = stockService.findStocksByWildCard(q);
        return stocks;
    }
}
