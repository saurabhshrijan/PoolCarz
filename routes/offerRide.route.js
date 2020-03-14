const express=require('express');
const router=express.Router();
const offerRideController=require('../controller/offerRide.controller');
router.post('/offer_ride',offerRideController.offerRide);

module.exports=router;