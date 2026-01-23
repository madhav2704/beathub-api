// /models/album.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    releaseDate: {
        type: Date
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',   // Relationship: Album belongs to an Artist
        required: true
    },
    genre: {
        type: String,
        trim: true
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'     // Relationship: Album contains Songs
    }]
}, { timestamps: true });

module.exports = mongoose.model('Album', albumSchema);