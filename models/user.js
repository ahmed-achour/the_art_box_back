const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
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
    },

});

const User = mongoose.model("user", UserSchema);

module.exports = User;