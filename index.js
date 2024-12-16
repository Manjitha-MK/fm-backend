import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//...............connect database...........................//
const mongoUrl = process.env.MONGO_DB_URI;

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("Database connected");
})
//.........................................................//

const app = express();

app.use(bodyParser.json()); //middleware

app.use((req,res,next)=>{
  const token = req.header("Authorization")?.replace("Bearer","")


  if(token != null){
    jwt.verify(token,process.env.SECRET_KEY, (error,decoded)=>{
       if(!error){
        console.log(decoded)
        req.user = decoded
       }
    })
  }
  next()
})

app.use("/api/users",userRouter)

app.listen(3000, () => {
  console.log("server is running port 3000");
});
