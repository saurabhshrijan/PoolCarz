const rides=require('../model/rides');
exports.show_rides=(req,res,next)=>{
    rides.find({},(err,rides)=>{
        if(err) res.status(404);
        res.status(200).send(rides);
    });
}