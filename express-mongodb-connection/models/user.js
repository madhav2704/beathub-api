// /models/user.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    playlists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'    // Relationship: User has many Playlists
    }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
