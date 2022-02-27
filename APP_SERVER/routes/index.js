var express = require('express');
var router = express.Router();
const ctrlMain=require('../controllers/main');
const ctrlAbout=require('../controllers/about');
const ctrlSampleData=require('../controllers/sampleData');
const ctrldisplay=require('../controllers/display');
/* GET home page. */
router.get('/',ctrlMain.index);
router.get('/about',ctrlAbout.about);
router.get('/list',ctrlSampleData.movielist);
router.get('/display',ctrldisplay.display);
router.get('/movies/:moviesid',ctrlSampleData.movieInfo);

router.route('/new')
.get(ctrlSampleData.addNewMovie)
.post(ctrlSampleData.doNewMovie);

module.exports = router;
