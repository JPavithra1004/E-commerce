const mongoose =require('mongoose')
const bcrypt = require('bcryptjs')
const userschema = new mongoose.Schema({
name:{
    type:String,
},
email:{
    type:String,
    unique:true,
    required: [true, "Email is required"],

},
password:{
    type:String,
    required: [true, "password is Required"],

},
});
// Hash password before saving user to database
userschema.pre("save",async function(next){//pre is a middleware
    if(!this.isModified("password")){
        return next();
    }
    const salt = await bcrypt.genSalt(10);//10 is bytes that the password will be hashed more the bytes more the computational power
    this.password = await bcrypt.hash(this.password,salt);
    next();
})
const User = mongoose.model("User",userschema);

module.exports = User;