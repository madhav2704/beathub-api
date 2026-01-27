const express = require('express');
const router = express.Router();
const { getAllArtists } = require('../controllers/artist.controller');


router.get('/', getAllArtists);


module.exports = router;


