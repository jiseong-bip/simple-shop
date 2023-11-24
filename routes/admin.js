const express = require("express");

const path = require("path");

const productController = require("../controllers/products");

const router = express.Router();
// admin/add-product임
router.get("/add-product", productController.getAddProduct);

//post 요청에만 반응
router.post("/add-product", productController.postAddProduct);

router.get("/products");

module.exports = router;
