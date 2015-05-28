package com.stocks.sample.dto;

import com.stocks.sample.domain.Stock;

public class StockDto {
    private Long id;
    private String name;
    private String symbol;

    public StockDto() {}

    public StockDto( Stock entity ) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.symbol = entity.getSymbol();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }
}
