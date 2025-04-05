// import userModel from '../models/userModels.js'
// Route for user login
import validator from 'validator'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from '../models/userModels.js'
const createToken = (id) =>{
   return jwt.sign({id},process.env.JWT_SECRET)
}
const loginUser=async(req,res)=>{
    try {
        const {name,email,password} =req.body
        const  user= await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"User exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (isMatch){
            const token=createToken(user._id)
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"invalid credentials"})
        }
    }catch{}

}
// route for user register
const registerUser=async(req,res)=>{

   
    try{
        const {name,email,password} = req.body
        // checking user already exists or not 
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }
        // validate email format and strong password
        if(!validator.isEmail(email)){

               return res.json({success:false,message:"please enter a valid email"})
        }
           if(password.length < 8){

               return res.json({success:false,message:"please enter a strong password"})
        }
        // hashing password
        const salt= await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)
        const newUser =new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
    }catch(error){
        console.log(error,"hello")
        res.json({success:false,message:error.message})

    }
    

   

}
const adminLogin=async(req,res)=>{

}
export  {loginUser,registerUser,adminLogin}