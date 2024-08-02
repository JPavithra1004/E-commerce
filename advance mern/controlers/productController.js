const product = require("../models/productmodels")
const { v4 : uuidv4 } = require('uuid');
uuidv4();
const getAllProducts = async (req, res) => {
    try{
        const products = await product.find();
    res.send(products);
    } catch (err) {
        console.error(err);
    }
    
};
const addProducts = async (req,res) =>{
    try{
        const {title,description,price,Image,Rating} = req.body ;
        const newProduct = new product({id:uuidv4(),
            title,description,price,Image,Rating});
        await newProduct.save();
        res.status(201).json(newProduct);
        
    }
    catch(err){
        console.error("Error adding new product",err);
      
    }
}


const deleteProducts = async(req,res) =>{
    try{
    const delProduct = req.params.id;
    await product.findOneAndDelete({id:delProduct});
    res.send("product deleted successfully");
}
catch(err){
    console.error(err);
}
};
const updateproducts=async(req,res)=>{
    try{
        const updateproduct = req.params.id;
        //const jsonId = JSON.stringify(updateproduct);
        const {title, description, price, Image, Rating}=req.body;
        await product.findOneAndUpdate({id:updateproduct},{title, description, price, Image, Rating})
        res.send("product updated successfully");
    }
    catch(err){
        console.error(err);
    }
};

const patchproducts = async(req,res) => {
    try{
        const toPatch = req.params.id;
        const patched = req.body;
        await product.findOneAndUpdate({id:toPatch},patched);
        res.send("Product Replaced successfully");
    }
    catch(err){
        console.error(err);
    }
}




module.exports = {getAllProducts,addProducts,deleteProducts,updateproducts,patchproducts};

