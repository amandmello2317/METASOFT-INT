const express = require('express')
const ConnectDB = require('./Db')
const cors = require('cors')
const FeedBackRouter = require('./Router/FeedBackRouter')
const bodyParser = require('body-parser');
const Authrouter = require('./Router/AuthRouter');

const app = express()
const Port = 5000

ConnectDB()
app.use(cors())
app.use(bodyParser.json());

app.use('/api/feedback', FeedBackRouter)

// PLEASE SIGNUP THE ADMIN USING POSTMAN 
// http://localhost:5000/api/admin/signup
app.use('/api/admin', Authrouter)

app.use(express.json())

app.listen(Port,() =>{
    console.log(`${Port} port is running`);
})