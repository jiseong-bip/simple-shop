const express = require("express");

const productController = require("../controllers/products");

const routes = express.Router();

routes.get("/", productController.getProducts);

routes.get("/products");

routes.get("/cart");

routes.get("/checkout");

module.exports = routes;
