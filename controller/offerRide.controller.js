const Offers = require('../model/offers');

exports.offerRide = (req, res, next) => {
    const offer=new Offers({
        id:2,
        name: req.body.name,
        pickup: req.body.pickup,
        destination: req.body.destination,
        car: req.body.car,
        seatleft: req.body.seatleft
    });
    offer.save((err,offer)=>{
        if(err) console.log(err);
        console.log(offer);
        res.status(200).json({"messege":"offer added Sucessfully", "status":200})

    })
    // Offers.create({
    //     id:2,
    //     name: req.body.name,
    //     pickup: req.body.pickup,
    //     destination: req.body.destination,
    //     car: req.body.car,
    //     seatleft: req.body.seatleft
    // }, (err, offer) => {
    //     if(err) res.status(400);
    //     console.log('chicken',offer);
    //     res.status(200).json({"messege":"offer added Sucessfully", "status":200});
    // })
}