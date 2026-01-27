const express = require('express');
const router = express.Router();


const { getAllPlaylists } = require('../controllers/playlist.controller');


router.get('/', getAllPlaylists);


module.exports = router;
