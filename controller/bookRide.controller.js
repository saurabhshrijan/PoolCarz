const rides = require('../model/rides');
const offer= require('../model/offers');
exports.bookRide = (req, res, next) => {
    offer.findOne({name:req.body.name,id:req.body.id},(err,doc)=>{
        if(err) res.status(404);
        if(doc.seatleft!=0) doc.seatleft=doc.seatleft-1;
        else{
            res.json({"messege":"no seat left"});
        }
        console.log('allo',doc);
        rides.create({
            riderName:doc.name,
            rideeName:req.body.ridee,
           pickup:req.body.pickup,
            destination:req.body.destination,
            status:"booked"
        },(err,ride)=>{
        if(err) res.status(404);
        console.log(ride);
        res.status(200).json({"seatLeft":doc.seatLeft,"messege":"Ride booked successfully"});
    });

    });

}