// 1. Load environment variables FIRST

require('dotenv').config();


// Core imports
const express = require('express');
const mongoose = require('mongoose');


// Route imports
const userRoutes = require('./routes/user.routes');
const artistRoutes = require('./routes/artist.routes');
const albumRoutes = require('./routes/album.routes');
const songRoutes = require('./routes/song.routes');
const playlistRoutes = require('./routes/playlist.routes');


// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;


// -------------------- MongoDB Connection --------------------
const mongoURI = process.env.MONGODB_URI;


if (!mongoURI) {
  console.error('ERROR: MONGODB_URI not found in .env');
  process.exit(1);
}


mongoose
  .connect(mongoURI)
  .then(() => console.log('Successfully connected to MongoDB Atlas'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });


mongoose.connection.on('connected', () => {
  console.log('Mongoose connected');
});


mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});
// ------------------------------------------------------------


// Middleware
app.use(express.json());


// Routes
app.use('/api/users', userRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/playlists', playlistRoutes);


// Health check
app.get('/', (req, res) => {
  res.json({
    message: 'BeatHub API is running!',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




