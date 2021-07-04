module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        productId: {
            type: Sequelize.INTEGER,
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