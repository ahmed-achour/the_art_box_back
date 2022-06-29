const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        min:3,
        max:50
    },
    description:{
        type: String,
        required: true,
        min:200,
        max:1000
    },
    image:{
        type:String,
        required:false
    },
    image:{
        type:Number,
        required:false
    },
    qte:{
        type:Number,
        required: true
    },
    publishedBy:{
        type:String,
        required:false
    },
    category:{
        type:String,
        required:true
    }
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;