const user = require('../model/user');
exports.login=(req,res,next)=>{
    user.findOne({userName:req.body.userName,password:req.body.password},(error,user)=>{
        if(error) return res.status(400).send('user not found');  
       res.status(200).send("login successfull");
    });
}