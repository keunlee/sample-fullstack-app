import {AbstractRepository} from "./AbstractRepository";
import {StockPojo, StockInstance} from "../domain/sequelize-types";

export class StockRepository extends AbstractRepository<StockInstance, StockPojo> {

    constructor() {
        super();
        this.model = this.models.StockModel;
    }
}