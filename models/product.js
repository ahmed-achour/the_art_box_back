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
    publishedBy:{
        type:String,
        required:false
    }
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;