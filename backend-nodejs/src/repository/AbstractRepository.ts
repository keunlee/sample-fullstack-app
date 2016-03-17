import sequelize = require('sequelize');

export class AbstractRepository<TInstance, TAttributes> {
    protected models = require('../domain/sequelize-models');
    protected model : sequelize.Model<TInstance, TAttributes>;

    /**
     *
     * @param pojo
     * @returns {Promise<TInstance>}
     */
    public create( pojo : TAttributes) : Promise<TInstance> {
        return this.model.create( pojo );
    }

    /**
     *
     * @returns {Promise<TInstance[]>}
     */
    public findAll() : Promise<TInstance[]> {
        return this.model.findAll();
    }

    // TODO: add more generic methods i.e. update, delete
}