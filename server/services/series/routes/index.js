const router = require('express').Router()
const series = require('./series')

router.use('/', series)

module.exports = router