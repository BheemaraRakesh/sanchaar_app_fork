const express = require('express')
const router = express.Router()

// function imports from controllers
const { displayOnLandingPage } = require('../controllers/getLandingPage')

router.get('/', displayOnLandingPage)

module.exports = router