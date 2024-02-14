const mongoose = require('mongoose')

const {Schema} = mongoose

const FeedBack = new Schema({
    visit:{
        type:String
    },
    food:{
        type:String
    },
    service:{
        type:String
    },
    experince:{
        type:String
    },
    recommend:{
        type:String
    },
    suggestion:{
        type:String
    }
})

module.exports = mongoose.model('feedback', FeedBack)