import mongoose from "mongoose";


const useSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
})

export default mongoose.model("User",useSchema)