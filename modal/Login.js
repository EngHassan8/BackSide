const mongoose = require ("mongoose")


const login = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        
      
    }
})

module.exports = mongoose.model("Login", login )