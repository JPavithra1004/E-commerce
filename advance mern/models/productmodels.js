const mongoose = require('mongoose')


const productschema = new mongoose.Schema({
    id:{
        type:String,
    },
    title:{
        type:String,
        required:[true,"title is required"],
    },
    description:{
        type:String,
        required:true
    },
    // category:{
    //     type:String
    // },
    price:{
        type:String
    },
    Image:{
        type:String
    },
    Rating:{
        rate:{
            type:Number
        },
        count:{
            type:Number

        }
        
        
    }
});

const products = mongoose.model("products",productschema);

module.exports =products;