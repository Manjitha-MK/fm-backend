import User from "../models/user.js";


export function createUser(req,res){
    const user = new User(req.body)

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

