const mongose=require('mongoose');
const UserSchema=new mongose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role_id:{
        type:mongose.Schema.Types.ObjectId,
        ref:'Role'
    },
    password:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongose.model('User',UserSchema);