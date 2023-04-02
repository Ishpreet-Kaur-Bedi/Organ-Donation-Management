import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
    title:{
        type :String , required:true},
    description:{
        type :String , required:true},
    organType:{
        type :String , required:true},
    location:{
        type :String , required:true},
    price:{
        type :Number , required:true},
    photo:{
        type :String , required:true},
        // this will be the user who created it 
        // one property can not have many users it will have single user via creator

        creator:{ type: mongoose.Schema.Types.ObjectId, ref:'user'},



})

const HospitalModel = mongoose.model('Hospital', HospitalSchema)

export default HospitalModel;

