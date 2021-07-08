module.exports = (app) => {
    const products = require("../controllers/product.controller.js");

    var router = require("express").Router();

    router.post("/", products.create);

    router.get("/", products.findAll);

    router.get("/existed", products.findAllExisted);

    router.get("/:id", products.findOne);

    router.get("/:catId", products.findCategory);

    router.put("/:id", products.update);

    router.delete("/:id", products.delete);

    router.delete("/", products.deleteAll);

    app.use("/api/products", router);
};
