 import mongoose from 'mongoose';

 var userSchema  = new mongoose.Schema({
     name:{
         type:String,
         unique:true
     },
     email:{
         type:String,
         unique:true
     }
 });

var userModel =  mongoose.model('user',userSchema);
export {userModel}