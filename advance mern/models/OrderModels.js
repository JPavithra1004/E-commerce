const mongoose = require('mongoose')

const Orderschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    orderDate:{
        type:Date,
    },
    products:[{
        productid:String,
        quantity:String,
        
    }],
    tot_Amount:{
        type:Number

    },
    orderStatus:{
        type:String
    },
    user_id:{
        type:String
    },
    userEmail:{
        type:String
    },
});

const Order = mongoose.model("Order",Orderschema) ;

module.exports = Order;



