import { Router, Request, Response } from "express";


const helloRouter = Router();

// Define route paths

helloRouter.get("/", (req:Request ,res:Response)=>{
   return  res.json ({ "data":"server is live "})
})
export default helloRouter