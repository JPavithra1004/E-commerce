const express = require('express');
const Router = express.Router();
const productController = require('../controlers/productController');
const auth = require("../middlewares/auth")

Router.get("/products",productController.getAllProducts);
Router.delete("/deleteproducts/:id",productController.deleteProducts);
Router.post("/addProducts",productController.addProducts);
Router.put("/updateproducts/:id",productController.updateproducts);
Router.patch("/patchproducts/:id",productController.patchproducts);



module.exports = Router;


