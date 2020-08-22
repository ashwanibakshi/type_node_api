import express from 'express';
import {userModel} from '../models/userModel';

var router = express.Router();

router.post ('/addTestData',(req,res)=>{
      var user = new userModel({
          name:req.body.name,
          email:req.body.email
      });
      user.save((err,data)=>{
         if(err){
             res.json({er:err});
         }else{
             res.json({da:data});
         }
      });
});

router.get('/testData',(req,res)=>{
     userModel.find((err,data)=>{
         if(err){
             console.log(err);
         }                 
         else{
             res.json({da:data});
         }    
     });
});

router.put('/testChange',(req,res)=>{
     var user ={
         name:req.body.name,
         email:req.body.email
     }
     userModel.update({_id:req.body.id},{$set:user},(er,udata)=>{
            if(er){
                res.json({err:er});
            }else{
             res.json({updata:udata});     
            }
     }); 
});

router.delete('/deleteTest/:id',(req,res)=>{
   userModel.deleteOne({_id:req.params.id},(err)=>{
          if(err){
              res.json({er:err});
          }
          res.json({msg:'deleted'});
   }); 
});

export {router};