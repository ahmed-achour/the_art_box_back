const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
    titlle:{
        type: String,
        required: true,
        min:8,
        max:40
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type:String,
        required: true
    }

});

const Section = mongoose.model("section ", SectionSchema);

module.exports = Section;