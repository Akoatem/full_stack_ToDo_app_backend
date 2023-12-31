
const express = require("express") 
const connectDB  = require('./config/db')
const routes = require('./routes/toDoRoute')
const cors = require('cors')

require('dotenv').config()

// Database
connectDB()
// connected PORT
const app = express()
const PORT = process.env.port || 5000

// json package
app.use(express.json())
app.use(cors())


app.use(routes)



app.listen(PORT, () => console.log(`Server running on: ${PORT}`))