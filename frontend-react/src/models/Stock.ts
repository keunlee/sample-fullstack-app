export class Stock {
    public id : number;
    public name : string;
    public symbol : string;

    public static deserialize( value : any ) : Stock {
        let stock : Stock = new Stock();
        stock.id = value.id;
        stock.name = value.name;
        stock.symbol = value.symbol;

        return stock;
    }
}