const express=require('express');
const router=express.Router();
const cancelController=require('../controller/cancel.controller');
router.post('/cancel_ride',cancelController.cancel);

module.exports=router;