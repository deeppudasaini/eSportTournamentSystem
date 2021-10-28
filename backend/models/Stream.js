const mongoose=require('mongoose');
const StreamSchema=new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
    },
   
    
    name:{
        type:String,
        unique:true
    },
    link:{
        type:String,
        unique:true,
        required:true
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

module.exports=mongoose.model('Stream',StreamSchema);