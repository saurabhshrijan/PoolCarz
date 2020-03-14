const mongoose=require('mongoose');
const rides=mongoose.Schema({
    rideId:{
        type:Number,
        default:0,
        required:true
    },
    riderName:{
        type:String
    },
    riddeName:{
        type:String
    },
    pickUp:{
        type:String
    },
    destination:{
        type:String
    },
    status:{
        type:String
    }


});
const Rides=mongoose.model('rides',rides);
module.exports=Rides;