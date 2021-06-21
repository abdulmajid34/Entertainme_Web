const router = require('express').Router()
const seriesController = require('../controllers/seriesController')

router.get('/series', seriesController.getAll)
router.post('/series', seriesController.createSeries)
router.get('/series/:id', seriesController.getId)
router.put('/series/:id', seriesController.editSeries)
router.delete('/series/:id', seriesController.deleteSeries)

module.exports = router