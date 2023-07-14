import mongoose from "mongoose";
import Express,{Request,Response} from "express";
import { iAuth } from "../interface/interface";


interface Auth extends iAuth, mongoose.Document{}



const authModel = new mongoose.Schema<iAuth>({
    userName:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        min:6
    },
    avatar:{
        type:String
    }

}, {timestamps:true})


export default mongoose.model<Auth>("User",authModel )