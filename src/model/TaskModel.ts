import mongoose from "mongoose";
import { iTask } from "../interface/interface";


interface Task extends iTask, mongoose.Document{}


const TaskModel = new mongoose.Schema<iTask>({
    task:{
        type:String,
        trim:true,
    },
    isCompleted:{
        type:Boolean
    },
    priority:{
        type:String
    },
    image: {
        type:String
    }

},{timestamps:true})


export default mongoose.model<Task>("Task", TaskModel)