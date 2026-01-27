// /models/playlist.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',    // Relationship: Playlist created by a User
        required: true
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'     // Relationship: Playlist contains Songs
    }]
}, { timestamps: true });

module.exports = mongoose.model('Playlist', playlistSchema);