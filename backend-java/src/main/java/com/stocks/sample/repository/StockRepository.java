package com.stocks.sample.repository;

import com.stocks.sample.domain.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StockRepository extends JpaRepository<Stock, Long> {

    @Query("select s from Stock s where s.symbol = ?1")
    List<Stock> findBySymbol(String symbol);

    @Query("select s from Stock s where upper(s.symbol) like upper(?1) or upper(s.name) like upper(?1) order by s.name asc")
    List<Stock> findByWildCard(String symbol);
}
