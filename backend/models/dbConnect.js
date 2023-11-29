const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to SanchaarDB")
    })
    .catch((err) => {
        console.error(err)
    })