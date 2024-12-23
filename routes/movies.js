const express = require('express');
const router = express.Router();

const {
  getAllMoviesJSON,
  getAllMovies, 
  postMovie,
  getMovieById,
  deleteMovieById,
  updateMovieById
} = require('../controllers/moviesController');

const { validateMovie } = require('../middleware/validateMovie');
const { authenticate } = require('../middleware/authenticate');

// Routes
router.get('/json', getAllMoviesJSON);
router.get('/', authenticate(['admin', 'regular']), getAllMovies);
router.get('/:id', authenticate(['admin', 'regular']), getMovieById);
router.post('/', authenticate(['admin']), validateMovie, postMovie);
router.put('/:id', authenticate(['admin']), validateMovie, updateMovieById);
router.delete('/:id', authenticate(['admin']), deleteMovieById);

module.exports = router;
