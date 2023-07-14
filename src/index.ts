import express,{Application} from 'express';
import appConfig from "./app"
import dotenv from "dotenv"
import {ProductionToolDB} from './config/Database';
dotenv.config()


//IIFE immediately invoked function expression
const port = parseInt(process.env.APPLICATION_PORT!);
const realPort:number= port;



const app:Application = express();


const server = async()=>{
    try {
        appConfig(app) //initialize app
        ProductionToolDB();// initialize db 

        // Server listening
        app.listen(realPort, ()=>{
            console.log(`Server listening on`,realPort)
        })
    
        
    } catch (error:any) {
        console.log(error.message)
        
    }
  
}

server()