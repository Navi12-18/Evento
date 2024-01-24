import mongoose, { Document } from 'mongoose';

export interface UserInterface extends Document{
    firstName : string;
    lastName : string;
    email : string;
    password : string;
    mobileNumber : number;
}

const userSchema = new mongoose.Schema<UserInterface>({
    firstName : {type : String, required : true},
    lastName : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required: true},
    mobileNumber : {type : Number, required : true}
})

const userModel = mongoose.model('User',userSchema);

export default userModel;