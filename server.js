const express = require('express')
require('dotenv').config()
const mongoConfig = require('./config/mongoConfig')
const contactrouter = require('./routes/contactRouter')

const app = express()
const PORT = 5000

app.use(express.json())
app.use('/contact', contactrouter)

app.get('/', (req,res) => {
    res.status(200).json({message: 'Welcome to my API!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
    mongoConfig()
})