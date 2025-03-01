import mongoose from "mongoose";

export const dbConnection = (URI)=>{
    mongoose.connect(URI).then((res)=>{
        console.log(`Database Connected...`)
    })
    .catch(err => console.log(`Server Error : ${err}`))
}