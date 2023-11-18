const express = require('express')
const app = express()

const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect()

app.get('/', (req, res) => {
    res.json({ text: `Hello, ${process.env.NAME}!` })
})

app.listen(PORT, err => {
    if (err)
        console.error(err)
    else
        console.info(`Server started at http://localhost:${PORT}`)
})