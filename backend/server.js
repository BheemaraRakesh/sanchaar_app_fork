const express = require('express')
const app = express()

// other imports
const PORT = process.env.PORT || 3000
require('./models/dbConnect')   // DB connection


// middleware
app.use(express.json())

app.use('/', require('./routes/routes'))

app.listen(PORT, err => {
    if (err)
        console.error(err)
    else
        console.info(`Server started at http://localhost:${PORT}`)
})