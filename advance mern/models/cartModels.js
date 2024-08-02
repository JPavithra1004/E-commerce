const mongoose = require('mongoose');

const cartschema = new mongoose.Schema({
    user_id:{
        type:String,
        require:true
    },
    products:[{
        productId:{
            type:String
        },
        quantity:{
            type:String
        }
        
    }]
});

  const cart = mongoose.model("cart",cartschema) ;

  module.exports = cart;
