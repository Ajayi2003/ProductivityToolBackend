import { Request,Response } from "express";
import authModel from "../model/authModel";
import bcrypt from "bcrypt";
import { iAuth } from "../interface/interface";



export const readAllUser = async(req: Request, res: Response):Promise<Response>=>{
    try {
        const User = await authModel.find()
        return res.status(200).json({
            message: "List of Users",
            data: User 

        })
        
    } catch (error:any) {
        return res.status(404).json({
            message: "User not found",
            data: error.message

        })
        

    }
}


export const readOneUser = async(req: Request, res: Response):Promise<Response>=>{
    try {
        const {id} = req.params
        const OneUser = await authModel.findById(id)
        return res.status(200).json({
            message: "One User gotten",
            data: OneUser
        })
        
    } catch (error:any) {
        return res.status(404).json({
            message: "Can't read user",
            data: error.message

        })

        
    }
}

export const UpdateUser = async(req: Request, res: Response):Promise<Response>=>{
    try {
        const {userName, avatar} = req.body
        const Update = await authModel.findByIdAndUpdate(req.params.id, {userName, avatar}, {new:true})

        return res.status(201).json({
            message: "User updated successfully",
            data: Update
        })
        
    } catch (error:any) {
        return res.status(404).json({
            message: "User not Updated check your Id",
            data: error.message

        })
        
    }
}
export const DeleteUser = async(req: Request, res: Response):Promise<Response>=>{
    try {
        const {id} = req.params
        const deleted = await authModel.findByIdAndDelete(id)

        return res.status(201).json({
            message: "User deleted successfully",
            data: deleted
        })
        
    } catch (error:any) {
        return res.status(404).json({
            message: "User not Deleted check your Id",
            data: error.message

        })
        
    }
}

export const CreateUser = async(req:Request, res:Response):Promise<Response>=>{
    try {
        
        const {userName, avatar,email,password} = req.body
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt)

        const User = await authModel.create({
            userName,
            password:hash,
            avatar,
            email

        })
        return res.status(201).json({
            message: 'User created',
            data: User
        })
        
    } catch (error:any) {
        return res.status(404).json({
            message: "Can't Create User",
            data: error.message

        })
        
    }
}

export const SigninUser = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {email, password} = req.body
        const user = await authModel.findOne({email})
        if(user){
            const compare = await bcrypt.compare(password, user.password!)
            if(compare){
                return res.status(201).json({message: `Welcome Back ${user.userName}`,
                data: user._id
            }) 

            }else{
                return res.status(404).json({message: "Incorrect Password"})

            }
        }else{
            return res.status(404).json({message: "Please enter a correct email"})
        }
        
    } catch (error:any) {
        return res.status(404).json({
            message: "Can't Signin User",
            data: error.message

        })
        
    }
}