const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
        return;
    }

    // Create a Product
    const product = {
        productId: req.body.productId,
        name: req.body.name,
        catId: req.body.catId,
        existed: req.body.existed ? req.body.existed : false,
        recipes: req.body.recipes
    };

    // Save Product in the database
    Product.create(product)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Product."
        });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Product.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving products."
        });
    });
};

// Find a single Product with an productId
exports.findOne = (req, res) => {
    const productId = req.params.productId;

    Product.findByPk(productId)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Product with productId=" + productId
        });
    });
};

// Update a Product by the productId in the request
exports.update = (req, res) => {
    const productId = req.params.productId;

    Product.update(req.body, {
        where: { productId: productId }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Product was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update Product with productId=${productId}. Maybe Product was not found or req.body is empty!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Error updating Product with productId=" + productId
        });
        });
};

// Delete a Product with the specified productId in the request
exports.delete = (req, res) => {
    const productId = req.params.productId;

    Product.destroy({
        where: { productId: productId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                message: "Product was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Product with productId=${productId}. Maybe Product was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Product with productId=" + productId
        });
    });
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
    Product.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Products were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all products."
        });
    });
};

// Find all existed Products
exports.findAllExisted = (req, res) => {
    Product.findAll({ where: { existed: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};