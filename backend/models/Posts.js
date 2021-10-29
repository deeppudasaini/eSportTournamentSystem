const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    id: {
        type:mongoose.Schema.Types.ObjectId,
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created_at:{
        type:Date,
        default:Date.now,
    },
    updated_at:{
        type:Date,
        default:Date.now,
    },
} );

module.exports = mongoose.model('Post', PostSchema);