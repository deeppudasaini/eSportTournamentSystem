const express =require('express')
const {registerUser,login}=require('../controllers/Users')
const router = express.Router()
router.get('/login',(req,res)=>{
    res.render('login')
    }).post('/login',login)
router.get('/register',(req,res)=>{
        res.render('register')
        }).post('/register',registerUser)

module.exports = router