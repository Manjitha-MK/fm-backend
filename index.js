import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

//...............connect database...........................//
const mongoUrl = "mongodb+srv://admin:123@cluster0.ey2ao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("Database connected");
})
//.........................................................//

const app = express();

app.use(bodyParser.json()); //middleware

app.post("/", (req, res) => {
  console.log(req.body);
  console.log("this is a post ");

  res.json({
    message: "Good morning " + req.body.name,
  });
});

app.listen(3000, () => {
  console.log("server is running port 3000");
});
