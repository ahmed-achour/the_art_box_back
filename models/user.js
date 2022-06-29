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
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    name:{
        type: String,
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