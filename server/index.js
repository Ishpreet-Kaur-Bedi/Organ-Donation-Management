import express from 'express';

import * as dotenv from 'dotenv';

import cors from 'cors';

import connectDB from './mongodb/connect.js';

import userRouter from '.routes/user.routes';

import hospitalRouter from '.routes/hospital.routes';



dotenv.config();


const app = express();
app.use(cors());


// this is the limit of files which will be sending through the frontend


app.use(express.json( {limit:'50mb'}));

app.get('/',(req,res)=>{
    res.send({message:'hello world'});
})

// now we will call our middleware

app.use('api/v1/users',userRouter);

app.use('api/v1/hospitals',hospitalRouter);


const startServer = async()=>{
    try{
//we want to try to connenct to the database.
connectDB(process.env.MONGODB_URL);
app.listen(8000,()=> console.log('Server started on port http://localhost:8000'));
    }
    catch(error){
        console.log(error);
    }
}

startServer();