import { iTask } from "../interface/interface";
import DoneModel from "../model/DoneModel";
import { Request,Response } from "express";



export const readTask = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const task = await DoneModel.find()
        return res.status(200).json({
            message: "List of Task",
            data: task
        })
        
    } catch (error) {
        return res.status(404).json({
            message: "Tasks not found"
        })
        
    }
}
export const readOneTask = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {id} = req.params
        const task = await DoneModel.findById(id)
        return res.status(200).json({
            message: "Task gotten",
            data: task
        })
        
    } catch (error) {
        return res.status(404).json({
            message: "Tasks not found"
        })
        
    }
}

export const CreateTask = async(req:Request<{},{}, iTask>, res:Response):Promise<Response>=>{
    try {
        const {task,priority,image} = req.body
        const create = await DoneModel.create({
            task,
            priority,
            isCompleted: false,
            image
        })
        return res.status(201).json({
            message: "Task created successfully",
            data: create
        })
        
    } catch (error) {
        return res.status(404).json({
            message: "Tasks not found"
        })
        
    }
}

export const DeleteTask = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {id} = req.params
        const remove = await DoneModel.findByIdAndDelete(id)
        return res.status(200).json({
            message: "Sucessfully removed",
            data: remove
        })
        
    } catch (error) {
        return res.status(404).json({
            message: "Can't delete task"
        })
        
    }
}

export const UpdateTask = async(req:Request, res:Response):Promise<Response>=>{
    try {
        
        const update = await DoneModel.findByIdAndUpdate(req.params.id, {isCompleted: true}, {new:true})
        return res.status(201).json({
            message: "Updated Successfully",
            data: update
        })
        

    } catch (error) {
        return res.status(404).json({
            message: "Can't Update Task"
        })
        
    }
}