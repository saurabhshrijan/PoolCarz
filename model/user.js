const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const User=mongoose.model('users',userSchema);
module.exports=User;