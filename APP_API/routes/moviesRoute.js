var express = require('express');

var router = express.Router();  

const ctrlMovies=require('../controllers/movieCTRL'); //requiring the movie controller
//routing of the CRUD methods 
router.get('/movies',ctrlMovies.getMovies);
router.post('/movies',ctrlMovies.createMovies);
router.get('/movies/:moviesid',ctrlMovies.getSingleMovies);
router.put('/movies/:moviesid',ctrlMovies.updateMovies);
router.delete('/movies/:moviesid',ctrlMovies.deleteMovies);

module.exports=router;
