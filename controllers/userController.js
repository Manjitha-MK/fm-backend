import User from "../models/user.js";
import bcrypt from "bcrypt";


export function createUser(req,res){

    const newUserData = req.body

    newUserData.password = bcrypt.hashSync(newUserData.password, 10)

    const user = new User(newUserData)

    user.save().then(() =>{
        res.json({
            message : "User created"
        })
    }).catch(() =>{
        res.json({
            message : "User not created"
        })
    })
    
}

export function getUser(req,res){
    User.find().then((users)=>{
        res.json({
            users,
        })
    })
}

