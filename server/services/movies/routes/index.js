const router = require('express').Router()
const movies = require('./movies')

router.use('/', movies)

module.exports = router