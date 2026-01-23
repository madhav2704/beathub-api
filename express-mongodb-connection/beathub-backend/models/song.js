// /models/song.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number,   // Duration in seconds
        required: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album'    // Relationship: Song belongs to an Album
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist'   // Relationship: Song performed by an Artist
    }
}, { timestamps: true });

module.exports = mongoose.model('Song', songSchema);