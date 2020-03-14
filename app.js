const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const PORT=8084;
const db=require('./model/db');
const loginRoute=require('./routes/login.route');
const ridesRoute=require('./routes/rides.route');
const bookRideRoute=require('./routes/bookRide.route');
const cancelRoute=require('./routes/cancel.route');
const offerRideRoute=require('./routes/offerRide.route');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));




app.get('/',(req,res,next)=>{
    res.status(200).json( "messege : welcome to poolCarz" );
})

app.post('/login',loginRoute);

app.get('/show_rides',ridesRoute);

app.post('/book_ride',bookRideRoute);

app.post('/cancel_ride',cancelRoute);

app.post('/offer_ride',offerRideRoute);






app.listen(PORT,(error)=>{
    if(!error){
        console.log('server running on Port ',PORT);
    }
    else{
        console.error(error);
    }
})