

const mongoose = require ("mongoose")


const school = mongoose.Schema({

    name: {
        type: String,
        description: true
    },
    id:{
        type: String,
        description: true
    },
    Email: {
        type: String,
        description: true
    },

    Mobile: {
        type: Number,
        description: true
    }


})


module.exports = mongoose.model("schoolmodel", school)