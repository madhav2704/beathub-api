const Song = require('../models/song');
require('../models/artist');
require('../models/album');


exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song
      .find()
      .populate('artist')
      .populate('album');


    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


