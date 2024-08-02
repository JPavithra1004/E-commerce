const Cart=require('../models/cartModels');
const Product=require('../models/productmodels');

// const jwt = require('jsonwebtoken');

const AddCart=async(req,res)=>{
    try{
        const userId = req.user;
        console.log(userId);

        const productid=req.body.productId;
        const quantity=req.body.quantity;
        console.log(productid,quantity);
        const incart=await Cart.findOne({user_id:userId});
        console.log(incart)
        if(incart){
            const isProduct = incart.products.find(p => p.productId === productid);
            console.log(isProduct)
            if (isProduct) {
                isProduct.quantity = (parseInt(isProduct.quantity) + parseInt(quantity)).toString();
            } else {
                incart.products.push({ productId:productid, quantity: quantity });
            }
            await incart.save();
            res.send(incart);
        }else{
                const add=new Cart({user_id:userId ,products:[{productId:productid,quantity:quantity}]});
                await add.save();
                res.send(add);
            }
        }
    catch(err){
        console.log(err);
    }
};

const GetCart=async(req,res)=>{
    try{
        const userId = req.user;
        console.log(userId);
        
        const incart=await Cart.findOne({user_id:userId });
        
        if(incart){
            const productIds = incart.products.map(product => product.productId);
            
            const products = await Product.find({ id: { $in: productIds } },{title:1,description:1,price:1,Image:1,Rating:1,_id:0});
            res.send(products);
        }
        else{
            res.send("empty cart");
        }
    }
    catch(err){
        console.log(err);
    }
}

const DeleteCart = async (req, res) => {
    try {
        const productId = req.params.id;
        const userId = req.user;
        const cart = await Cart.findOne({ userId });
        
        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }
        

        for (let i = 0; i < cart.products.length; i++) {
            if (cart.products[i].productId.toString() === productId) {
                if (cart.products.length <= 1) {
                    await Cart.deleteOne({ userId });
                    return res.status(200).json({ msg: "Cart deleted Successfully" });
                } 
                else{
                    cart.products.splice(i, 1); 
                    await cart.save(); 
                    return res.status(200).json({ msg: "Deletion successful" });
                }
            }
        }

            return res.status(404).json({ msg: "Product not found in cart" });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};


module.exports={AddCart,GetCart,DeleteCart};