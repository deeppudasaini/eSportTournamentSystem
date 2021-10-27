const User=require('../models/User');
const bcrypt=require('bcryptjs')
const getAllUsers=async (req,res)=>{
    const users=await User.find().then(users=>{
        res.json(users);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const registerUser=async (req,res)=>{
    
    const {name,email,password}=req.body;
    let errors=[];
    let success_msg=[];
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
                    password
                });
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err) throw err;
                        newUser.password=hash;
                        newUser.save().then(user=>{
                            req.flash(
                                'success_msg',
                                'You are now registered and can log in'
                              );
                            res.redirect('/users/login');
                            res.json(user);
                            res.send(user);
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
    passport.authenticate('local',{
        successRedirect:'/dashboard',
        failureRedirect:'/users/login',
        failureFlash:true
    })(req,res,next);
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
    login
}