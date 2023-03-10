const mongoose = require('mongoose')
require('dotenv').config()


const connect = mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.MONGODB_DBNAME })
connect.then(() => console.log("Connected to DB")).catch(err => console.error(err))