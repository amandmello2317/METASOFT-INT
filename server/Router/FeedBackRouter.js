const express = require('express')
const {FeedBackInsert, FeedBackView} = require('../Controller/FeedbackConntroller')

const FeedBackRouter = express.Router()


FeedBackRouter.post('/feedbackinsert', FeedBackInsert)

// TO VIEW THE FEEDBACK FOR ADMIN 
FeedBackRouter.get('/feedbackview', FeedBackView)


module.exports = FeedBackRouter
