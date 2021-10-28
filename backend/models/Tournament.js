const mongoose = require('mongoose')
const TournamentScheme = new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    title: {
        type: String,
        required: true
    },
    about:{
        type: String,
        required: true

    },
    logo:{
        type: String,
        default:''
    },
    prize:{
        type:Number,
        required: true
    },
    venue:{
        type: String,
        required: true
    },
    groups:{
        type:Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    players:{
        type: Number,
        required: true

    },
    status:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    }


})
module.exports = mongoose.model('Tournament',TournamentScheme)