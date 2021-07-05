module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        catId: {
            type: Sequelize.INTEGER
        },
        existed: {
            type: Sequelize.BOOLEAN 
        },
        recipes: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        },
    });

    return Product;
};