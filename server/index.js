const express = require('express')
const connectDB = require('./db')
const userRoutes = require('./userRoutes')
const cors = require('cors')

const app = express()
const PORT = '2626'

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(userRoutes)



connectDB()





app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`)
})
