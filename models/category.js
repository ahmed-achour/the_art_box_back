const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    titlle:{
        type: String,
        required: true,
        min:8,
        max:40
    },
    description:{
        type: String,
        required: true,
    }

});

const Category = mongoose.model("category ", CategorySchema);

module.exports = Category;