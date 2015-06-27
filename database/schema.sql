drop table if exists stock cascade;

drop sequence if exists stock_id_seq;

create table stock (
    id int8 not null,
    industry varchar(255),
    ipoYear varchar(255),
    lastSale varchar(255),
    marketCap varchar(255),
    name varchar(255),
    sector varchar(255),
    summary varchar(255),
    symbol varchar(255),
    primary key (id)
);

create sequence stock_id_seq;