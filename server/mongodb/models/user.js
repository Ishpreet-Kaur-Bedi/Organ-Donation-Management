import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{ type: String , required: true},
    email:{ type: String , required: true},
    organRequired:{ type: String , required: true},
    avatar:{ type: String , required: true},
// since it is an array a user can create multiplehospital property


    allProperties: [{type: mongoose.Schema.Types.ObjectId, ref: 'Hospital'}]
    
});


const userModel = mongoose.model('user',UserSchema);


export default userModel;