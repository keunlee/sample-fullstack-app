package com.stocks.sample.controller;

import com.stocks.sample.dto.StockDto;
import com.stocks.sample.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@Controller
public class StockController extends AbstractController {

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

    /**
     *
     * @param symbol
     * @return
     * @throws IOException
     */
    @ResponseBody
    @RequestMapping(value = {"/service/stockhistory/{symbol}"}, method = {RequestMethod.GET}, produces = "application/json")
    public ResponseEntity<Object> getHistoricalStockData(@PathVariable String symbol) throws IOException {
        String result = stockService.getHistoricalStockData( symbol );
        Object node = this.getFormattedRepresentation(MediaType.APPLICATION_JSON_VALUE, result);
        HttpHeaders httpHeaders = this.getHttpHeadersForEncoding(MediaType.APPLICATION_JSON_VALUE);
        ResponseEntity<Object> response = new ResponseEntity<Object>(node, httpHeaders, HttpStatus.OK);
        return response;
    }
}
