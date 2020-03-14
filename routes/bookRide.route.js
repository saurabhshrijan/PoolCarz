const express=require('express');
const router=express.Router();
const bookRideController=require('../controller/bookRide.controller');
router.post('/book_ride',bookRideController.bookRide);

module.exports=router;