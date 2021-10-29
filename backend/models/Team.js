const mongoose = require('mongoose')
const TeamScheme = new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    title:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true

    },
    about:{
        type:String,
        required:true
    },
    founding_date:{
        type:Date,
        required:true
    },
    wins:{
        type:Number,
        required:true
    },
    loses:{
        type:Number,
        required:true

    },
    total_game:{
        type:Number,
        required:true
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
module.exports = mongoose.model('Team',TeamScheme)