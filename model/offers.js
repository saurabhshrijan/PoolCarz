const mongoose=require('mongoose');
//const autoIncrement=require('mongoose-auto-increment');
const offers=mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String,
        
    },
    car:{
        type:String,
        
    },
    seatleft:{
        type:Number,
        
    },
    pickup:{
        type:String,
        
    },
    destination:{
        type:String,
       
    }
});
const Offers=mongoose.model('offers',offers);
//offers.plugin(autoIncrement.plugin,{model:Offers,field:id});
module.exports=Offers;