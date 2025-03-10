import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,

    },
    user:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
},{timestamps:true})

const User = mongoose.model('User', userSchema);

export default User;