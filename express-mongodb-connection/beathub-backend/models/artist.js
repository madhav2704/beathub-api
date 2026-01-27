// /models/artist.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'    // Relationship: Artist has many Albums
    }],
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'     // Relationship: Artist has many Songs
    }]
}, { timestamps: true });

module.exports = mongoose.model('Artist', artistSchema);