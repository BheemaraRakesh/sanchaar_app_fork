const express = require('express')
const router = express.Router()

// function imports from controllers
const {
    displayOnLandingPage,
    handlePost
} = require('../controllers/landingPageController')

router.route('/')
    .get(displayOnLandingPage)
    .post(handlePost)

module.exports = router