const mongoose=require('mongoose');
const GearSchema=new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    
    name:{
        type:String,

    },
    description:{
        type:String,
    },
    image:{
        type:String,

    },
    price:{
        type:Number,
    },
    link:{
        type:String,
    },
    
    created_at:{
        type:Date,
        default:Date.now,
    },
    updated_at:{
        type:Date,
        default:Date.now,
    },

})

module.exports=mongoose.model('Gear',GearSchema);