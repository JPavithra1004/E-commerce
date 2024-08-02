const express = require("express")
const Router = express.Router();
const cartController = require("../controlers/cartController")
const auth =require('../middlewares/auth')

Router.post("/addCart",auth,cartController.AddCart);
Router.get("/getCart",auth,cartController.GetCart);
Router.delete("/deleteCart",auth,cartController.DeleteCart);




module.exports = Router;