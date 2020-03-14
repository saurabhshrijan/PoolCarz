const offer= require('../model/offers');
const rides=require('../model/rides');
exports.cancel=(req,res,next)=>{
rides.findOneAndUpdate({rideId:req.body.rideId},{status:"cancelled"},(err,ride)=>{
    if(err) res.status(404)
    offer.updateOne({name:ride.rider},{seatLeft:seatLeft+1},(err,offer)=>{
        res.status(200).json({"messege":"cancelled successfully"});
    });
});
}