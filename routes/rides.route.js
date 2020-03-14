const express=require('express');
const router=express.Router();
const ridesController=require('../controller/rides.controller');
router.get('/show_rides',ridesController.show_rides);

module.exports=router;