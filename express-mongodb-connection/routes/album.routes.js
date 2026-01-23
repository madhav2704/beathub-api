const express = require('express');
const router = express.Router();


const { getAllAlbums } = require('../controllers/album.controller');


router.get('/', getAllAlbums);


module.exports = router;


