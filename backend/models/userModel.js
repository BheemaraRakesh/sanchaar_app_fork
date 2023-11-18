const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)