require('dotenv').config();
const mongoose = require('mongoose');

// Import models (make sure each file exports mongoose.model)
const Artist = require('./models/artist');
const Album = require('./models/album');
const Song = require('./models/song');
const User = require('./models/user');
const Playlist = require('./models/playlist');

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB connected for seeding');

    // Clear existing collections
    await Promise.all([
      Artist.deleteMany({}),
      Album.deleteMany({}),
      Song.deleteMany({}),
      User.deleteMany({}),
      Playlist.deleteMany({})
    ]);

    // Create Artist
    const artist = await Artist.create({
      name: 'BeatHub Artist',
      genre: 'Pop'
    });

    // Create Album
    const album = await Album.create({
      title: 'First Album',
      artist: artist._id,
      songs: []
    });

    // Create Song
    const song = await Song.create({
      title: 'First Song',
      duration: 210,
      artist: artist._id,
      album: album._id
    });

    // Link Album ↔ Song
    album.songs.push(song._id);
    await album.save();

    // Link Artist ↔ Album & Song
    if (!artist.albums) artist.albums = [];
    if (!artist.songs) artist.songs = [];
    artist.albums.push(album._id);
    artist.songs.push(song._id);
    await artist.save();

    // Create User
    const user = await User.create({
      name: 'Kalvian',
      email: 'kalvian@example.com',
      password: 'password123'
    });

    // Create Playlist
    await Playlist.create({
      name: 'My Playlist',
      description: 'Seeded playlist',
      user: user._id,       // ensure schema field matches (use "user" not "owner")
      songs: [song._id]
    });

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await mongoose.connection.close();
  }
}

seedDB();