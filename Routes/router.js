const express=require('express')
const userController=require('../controllers/userController')

const router=new express.Router()

router.post('',userController.newUser)

router.post('/login',userController.loginUser)

module.exports=router
