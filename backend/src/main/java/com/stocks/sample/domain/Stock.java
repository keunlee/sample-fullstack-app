package com.stocks.sample.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "stock")
public class Stock implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @SequenceGenerator(name = "stock_id_seq", sequenceName = "stock_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "stock_id_seq")
    private Long id;

    @Column
    private String symbol;

    @Column
    private String name;

    @Column
    private String lastSale;

    @Column
    private String marketCap;

    @Column
    private String ipoYear;

    @Column
    private String sector;

    @Column
    private String industry;

    @Column
    private String summary;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        id = id;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastSale() {
        return lastSale;
    }

    public void setLastSale(String lastSale) {
        this.lastSale = lastSale;
    }

    public String getMarketCap() {
        return marketCap;
    }

    public void setMarketCap(String marketCap) {
        this.marketCap = marketCap;
    }

    public String getIpoYear() {
        return ipoYear;
    }

    public void setIpoYear(String ipoYear) {
        this.ipoYear = ipoYear;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Stock stock = (Stock) o;

        if (id != null ? !id.equals(stock.id) : stock.id != null) return false;
        if (symbol != null ? !symbol.equals(stock.symbol) : stock.symbol != null) return false;
        if (name != null ? !name.equals(stock.name) : stock.name != null) return false;
        if (lastSale != null ? !lastSale.equals(stock.lastSale) : stock.lastSale != null) return false;
        if (marketCap != null ? !marketCap.equals(stock.marketCap) : stock.marketCap != null) return false;
        if (ipoYear != null ? !ipoYear.equals(stock.ipoYear) : stock.ipoYear != null) return false;
        if (sector != null ? !sector.equals(stock.sector) : stock.sector != null) return false;
        if (industry != null ? !industry.equals(stock.industry) : stock.industry != null) return false;
        return !(summary != null ? !summary.equals(stock.summary) : stock.summary != null);

    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (symbol != null ? symbol.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (lastSale != null ? lastSale.hashCode() : 0);
        result = 31 * result + (marketCap != null ? marketCap.hashCode() : 0);
        result = 31 * result + (ipoYear != null ? ipoYear.hashCode() : 0);
        result = 31 * result + (sector != null ? sector.hashCode() : 0);
        result = 31 * result + (industry != null ? industry.hashCode() : 0);
        result = 31 * result + (summary != null ? summary.hashCode() : 0);
        return result;
    }
}
