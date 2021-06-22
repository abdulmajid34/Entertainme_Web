const router = require('express').Router()
const moviesController = require('../controllers/moviesController')

router.get('/movies', moviesController.getAll)
router.get('/movies/:id', moviesController.getId)
router.post('/movies', moviesController.createMovies)
router.delete('/movies/:id', moviesController.deleteMovies)
router.put('/movies/:id', moviesController.editMovies)

module.exports = router