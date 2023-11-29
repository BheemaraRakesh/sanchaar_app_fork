exports.displayOnLandingPage = (req, res) => {
    res.json("Welcome to the landing page")
}

exports.handlePost = (req, res) => {
    console.log(req.body)
    res.send(req.body)
}