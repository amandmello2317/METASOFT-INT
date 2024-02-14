const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    email: {
        type:String
    },
    password: {
        type:String
    }
})

module.exports = mongoose.model("Auth", AuthSchema)