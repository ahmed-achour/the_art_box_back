const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    owner:{
        type: String,
        required: true,
        min:3,
        max:50
    },
    name:{
        type: String,
        required: true,
        unique: true,
        min:3,
        max:50
    },
    description:{
        type: String,
        required: true,
        min:200,
        max:1000
    },
    adress:{
        type: String,
        required: true,
        min:3,
        max:50
    },
    phone:{
        type: String,
        required: true,
        min:3,
        max:12
    },
    section:{
        type: [String],
        required:true
    },
    image:{
        type:String,
        required:false
    }
});

const Store = mongoose.model("store", StoreSchema);

module.exports = Store;