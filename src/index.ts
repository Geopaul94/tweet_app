import express  ,{ Express, Router } from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/routes";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { error } from "console";

dotenv.config()


const app:Express =express();
const server=http.createServer(app)





const mongoURI = process.env.MONGO_URL
if(!mongoURI){
    console.log(mongoURI);
    
console.error("Mongo DB URL is not defined")
process.exit(1);
}

mongoose.connect(mongoURI, {}).then(() =>{
console.log("MongoDB is connected");
})
.catch((error) => {
console.log(error)
});
//define the routes
 
app.use("/api/v1",router);


// express configureation  
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set("PORT" ,3000);
app.set("BASE_URL", "localhost");


// start with the server 
try {
    const port :Number =app.get("PORT")
        const baseUrl :string =app.get( "BASE_URL")
        server.listen(port,():void=>{console.log("Server is listening ")})
        


}
catch(error){
console.log(error)
};

export default server