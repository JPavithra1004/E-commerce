const User = require('../models/userModels');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const addUser = async(req,res) =>{
    console.log(req.body);
    const {name,email,password} = req.body;
    const user = new User({name,email,password});
    await user.save();
    // res.send(user);
    res.status(201).json({message:"User added successfully"})
}
const login = async(req,res) =>{
    const {email,password}= req.body
    const user = await User.findOne({email});
try{
   if (!user){
    return res.status(404).json({message : "user not found"});
   }
   const isValidPassword = await bcrypt.compare(password, user.password);
   if(!isValidPassword) {
    return res.status(401).json({message: "Inavalid password"});
   }
   const token = jwt.sign({userId: user._id}, "secret_key",{
    expiresIn: "1h",
   });
   res.json({ token });

   }catch(err){

   
   console.log(err);
}
};
module.exports = {addUser,login};