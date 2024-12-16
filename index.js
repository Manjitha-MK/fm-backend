import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

//...............connect database...........................//
const mongoUrl = "mongodb+srv://admin:1234@cluster0.ey2ao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("Database connected");
})
//.........................................................//

const app = express();

app.use(bodyParser.json()); //middleware

app.use((req,res,next)=>{
  
})

app.use("/api/users",userRouter)

app.listen(3000, () => {
  console.log("server is running port 3000");
});
