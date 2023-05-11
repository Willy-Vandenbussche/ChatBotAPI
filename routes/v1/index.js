const express =require("express")
const router=express.Router()
const dialogcontroller= require('../../controller/v1/index')

router.get('/', dialogcontroller.home)

router.get("/test",dialogcontroller.test)

router.get("/dialog/question",dialogcontroller.findAllQuestion)

router.get("/dialog/answer/:id",dialogcontroller.answer)

module.exports = router