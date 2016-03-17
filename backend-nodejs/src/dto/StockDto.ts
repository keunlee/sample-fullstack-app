import {StockPojo} from "../domain/sequelize-types";

export class StockDto {
    public id : number;
    public name : string;
    public symbol : string;

    constructor( entity? : StockPojo ) {
        if ( entity ) {
            this.id = entity.id;
            this.name = entity.name;
            this.symbol = entity.symbol;
        }
    }
}