import express from 'express';
import {router} from './api/demoApi';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


//init app
const app = express();

//connect to db
mongoose.connect('mongodb://localhost:27017/demoTest',{useNewUrlParser:true})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err));

//fetch form data
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes
app.use('/tester',router);

const port = process.env.PORT||3000;
app.listen(port,()=>console.log('sever run at port '+port));