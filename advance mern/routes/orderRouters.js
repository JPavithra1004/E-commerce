const express=require('express');
const Router=express.Router();

const OrderController=require('../controlers/OrderController');

Router.post('/order',OrderController.createOrder);
Router.get('/getorder',OrderController.getOrders);

module.exports=Router;