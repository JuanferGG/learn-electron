const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const tasksRoutes = require('./routes/tasks')

const app = express()

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/', tasksRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.use((req, res) => {
  res.status(404).json({
    message: 'EndPoint No Encontrado 😴'
  })
})

module.exports = app
