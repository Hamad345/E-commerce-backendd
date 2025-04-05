import { v2 as cloudinary  } from "cloudinary";
import { json } from "express";
import productModels from '../models/productModels'

// function for add product
const addProduct = async (res,req) => {
 try{
    const {name,description,price,category,subCategory,sizes,bestseller}=req.body;
    const image1 = req.files.image1 & req.files.image1[0]
    const image2 = req.files.image2 & req.files.image2[0]
    
 const image3 = req.files.image3 & req.files.image3[0]
         
 
const image4 =  req.files.image4 & req.files.image4[0]
const images =[image1,image2,image3,image4].filter((item)=>item !==undefined)
let imagesUrl = await Promise.all(
   images.map(async (item)=>{
      let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
      return result.secure_url
   })
)
const productData ={
   name,
   description,
   price:Number(price),
   subCategory,
   bestseller:bestseller=== "true"? true :false,
   sizes:JSON.parse(sizes),
   image:imagesUrl,
   date:Date.now()



}
console.log(productData)//////////////////////////////////////////////// start from here 6:54:51
const product = new productModels

res.json({})


 }catch(error){
    console.log(error)
    res.send({success:false,message:error.message})

 }
}
// function for list products
const listProducts = async (res,req) => {
    
}
// function for removing products
const removeProducts = async (res,req) => {
    
}
// function for single product info 
const singleProduct = async (req,res) =>{

}
export {addProduct,singleProduct,removeProducts,listProducts }