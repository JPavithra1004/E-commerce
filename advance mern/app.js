const express = require('express');
const app = express();
const ProductRouters = require("../advance mern/routes/productRouters");
const UserRouters = require("../advance mern/routes/userRouters");
const cartRouters = require('../advance mern/routes/cartRouters')
const mongoose = require('mongoose');
const cors = require("cors");

app.use(cors());

mongoose.connect('mongodb+srv://pavithra1004:1004@cluster0.ekq8hmo.mongodb.net/ECommerce?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("mongodb connected");

});
app.set("view engine", "ejs");

app.use(express.json());

app.use('/',ProductRouters);
app.use('/',UserRouters);
app.use('/',cartRouters);

app.listen(3000, () =>{
    console.log("server is running on port 3000");
});