const express = require('express')
const mongoose = require('mongoose')



const connectDB = async (req, res) => {
    const mongoDBURL = 'mongodb+srv://ajiboyetoheeb10:ajeeboye111@cluster0.kkcybdq.mongodb.net/'
    const connect = await mongoose.connect(mongoDBURL)
    console.log('database connection established')
}

module.exports = connectDB