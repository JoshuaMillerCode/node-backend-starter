// Requiring and configuring the .env file to access its variables 
require("dotenv").config()
// Requiring express
const express = require('express')
// Creating the express server and storing inside the app variable
const app = express()
// Port in which the server will run on 
const PORT = process.env.PORT || 8000
// Requiring example router
const exampleRouter = require('./routes/exampleRoute')

const middlewares = require('./middleware/exampleMiddleware')


// Configuring the server to accept and parse JSON data.
app.use(express.json())

// Configuring the server to run the middleware
app.use(middlewares.middleware)

// Connecting the router to the server
app.use('/', exampleRouter)


// Calling the listen function telling the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})