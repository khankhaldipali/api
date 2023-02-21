const mongoose=require('mongoose');
const loginSchema=new mongoose.Schema({
    name:{
        type:"string"
    },
    email:{
        type:"string"
    },
    password:{
        type:"mixed"
    },
    confirm_password:{
        type:"mixed"
    }

})
const login=mongoose.model('login',loginSchema);

module.exports=login;