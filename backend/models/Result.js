const mongoose=require('mongoose');
const ResultSchema=new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    remarks:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    tournament_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tournament',

    },
    team_a_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Team',
    },
    team_b_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Team',
    },
    team_a_score:{
        type:Number,
        required:true,
    },
    team_b_score:{
        type:Number,
        required:true,
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

module.exports=mongoose.model('Result',ResultSchema);