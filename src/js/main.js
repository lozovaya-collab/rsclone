const express = require('express')
const router = express.Router()
const path = require('path')
router.get('/', function(req, res) {
    let pathFile = path.format({
        dir: "C:\\Users\\Anay\\Documents\\RS-school\\YelpClone\\YelpClone\\dist\\",
        base: "index.html"
    })
    res.sendFile(pathFile)
});

router.get('/restaurants', function(req, res) {
    let pathFile = path.format({
        dir: "C:\\Users\\Anay\\Documents\\RS-school\\YelpClone\\YelpClone\\dist\\pages\\",
        base: "restaurants.html"
    })
    res.sendFile(pathFile)
});

router.get('/sign-up', function(req, res) {
    let pathFile = path.format({
        dir: "C:\\Users\\Anay\\Documents\\RS-school\\YelpClone\\YelpClone\\dist\\pages\\",
        base: "signUp.html"
    })
    res.sendFile(pathFile)
});
router.post('/sign-up', function(req, res) {
    console.log(req.body)
})
module.exports = router