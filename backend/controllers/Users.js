const User=require('../models/User');
const bcrypt=require('bcryptjs')
const passport = require('passport');
const getAllUsers=async (req,res)=>{
    const users=await User.find().then(users=>{
        res.json(users);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const registerUser=async (req,res)=>{
    
    const {name,email,password,role_id}=req.body;
    let errors=[];
    
    if(!name || !email || !password){
        errors.push({msg:'Please enter all fields'});
    }
    if(password.length<6){
        errors.push({msg:'Password must be at least 6 characters'});
    }
    
    if(errors.length>0){
        res.status(400).json(errors);
    }
    else{
        User.findOne({email:email}).then(user=>{
            if(user){
                errors.push({msg:'Email already exists'});
                res.status(400).json(errors);
            }
            else{
                const newUser=new User({
                    name,
                    email,
                    password,
                    role_id
                });
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err) throw err;
                        newUser.password=hash;
                        newUser.save().then(user=>{
                            res.json(user);
                            
                            
                        }).catch(err=>{
                            res.status(500).json(err);
                            
                        });
                    });
                });
                 
            }
        });
       
    }

    
}
const login=async(req,res,next)=>{
   passport.authenticate('local',
    {
        successRedirect:'/api/users/me',
        failureRedirect:'/api/users/login',
        failureFlash:false
    }
   )(req,res,next);
}
const logout=async (req,res)=>{
    if(req.user){
        req.logout();
        res.json({msg:'Logged out'});
    }
    else{
        res.json({msg:'Not logged in'});
    }

}
const getLoggedInUser=async (req,res)=>{
    res.json(req.user);
}


const getSingleUser=async (req,res)=>{
    const user=await User.findById(req.params.userId).then(user=>{
        res.json(user);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateUser=async (req,res)=>{
    const user=await User.findByIdAndUpdate(req.params.userId,req.body,{new:true}).then(user=>{
        res.json(user);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteUsers=async (req,res)=>{
    const user= await User.findByIdAndDelete(req.params.userId).then(user=>{
        res.json(user);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllUsers,
    registerUser,
    getSingleUser,
    updateUser,
    deleteUsers,
    login,
    getLoggedInUser,
    logout
}