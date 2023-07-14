import express,{ Application } from "express";
import task from './Router/TaskRoute'
import progress from './Router/ProgressRoute'
import done from './Router/DoneRoute'
import auth from "./Router/AuthRoute"
import cors from "cors"


const appConfig = (app:Application)=>{
    // Middleware configuration
    app.use(express.json())
    app.use(cors())

    // route and endpoint
    app.use("/api/task", task)
    

    // progress route and endpoint
    app.use("/api/progress", progress)


    // Done route and endpoint
    app.use("/api/done", done)

    // Auth route and endpoint
    .use("/api/auth", auth)

}
export default appConfig;

