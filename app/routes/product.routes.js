module.exports = (app) => {
    const products = require("../controllers/product.controller.js");

    var router = require("express").Router();

    // Create a new Product
    router.post("/", products.create);

    // Retrieve all Products
    router.get("/", products.findAll);

    // Retrieve all existed Products
    router.get("/existed", products.findAllExisted);

    // Retrieve a single Product with productId
    router.get("/:productId", products.findOne);

    // Update a Product with productId
    router.put("/:productId", products.update);

    // Delete a Product with productId
    router.delete("/:productId", products.delete);

    // Create a new Product
    router.delete("/", products.deleteAll);

    app.use("/api/products", router);
};
