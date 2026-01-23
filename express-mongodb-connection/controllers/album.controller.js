const Album = require('../models/album');


exports.getAllAlbums = async (req, res) => {
  try {
    const albums = await Album
      .find()
      .populate('artist')
      .populate('songs');


    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


