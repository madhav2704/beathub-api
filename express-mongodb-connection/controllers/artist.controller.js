const Artist = require('../models/artist');
require('../models/album');
require('../models/song');


exports.getAllArtists = async (req, res) => {
  try {
    const artists = await Artist
      .find()
      .populate('albums')
      .populate('songs');


    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
