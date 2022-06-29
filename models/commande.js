const mongoose = require('mongoose');

const CommandeSchema = new mongoose.Schema({
    numCmd:{
        type: Number,
        required: true,
    },
    client:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    products:{
        type:[String],
        required:true
    },
    date:{
        type: Date,
        required: true,
    },
    total_amount:{
        type: Number,
        required: true,
    }
});

const commande = mongoose.model("commande", CommandeSchema);

module.exports = commande;