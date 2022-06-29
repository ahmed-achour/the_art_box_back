const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        min:8,
        max:40
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
        default: "client"
    },
    name:{
        type: String,
        unique: true,
        min:3,
        max:50
    },
    description:{
        type: String,
        min:200,
        max:1000
    },
    adress:{
        type: String,
        min:3,
        max:50
    },
    phone:{
        type: String,
        min:3,
        max:12
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;