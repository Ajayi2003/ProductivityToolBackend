import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const STRINGURL:string = process.env.APPLICATION_DB!

export const ProductionToolDB = ()=>{
   mongoose.connect(STRINGURL).then(()=>{
    console.log("Database Connected")
   })
}
 