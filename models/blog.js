const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
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
    content:{
        type: String,
        required: true,
        unique: true,
        min:1000,
        max:5000
    },
    image:{
        type:String,
        required:false
    },
    createdBy:{
        type: String,
        required: true,
    }
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;