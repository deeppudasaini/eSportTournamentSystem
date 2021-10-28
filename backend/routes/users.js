const express =require('express')
const {afterAuthenticated}=require('../config/auth')
const { getAllUsers,
    registerUser,
    getSingleUser,
    updateUser,
    deleteUsers,
    login,
    getLoggedInUser,
    logout}=require('../controllers/Users')
const userRouter = express.Router()

userRouter.post('/login',login)
userRouter.post('/register',registerUser)
userRouter.get('/logout',logout)
userRouter.route('/',afterAuthenticated).get(getLoggedInUser)
userRouter.route('/:id',afterAuthenticated).get(getSingleUser).put(updateUser).delete(deleteUsers)

module.exports = userRouter