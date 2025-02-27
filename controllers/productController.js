

// function for add product
const addProduct = async (res,req) => {
 try{
    const {name,description,price,category,subCategory,sizes,bestseller}=req.body
    const image1 = req.files.image1 & req.files.image1[0]
    const image2 = req.files.image2 & req.files.image2[0]
    
 const image3 = req.files.image3 & req.files.image3[0]
            
const image4 =  req.files.image4 & req.files.image4[0]
const images =[image1,image2,image3,image4].filter((item)=>item !==undefined)
let imagesUrl = await Promise.all(
   images.map(async(item)=>{
      let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
   })
)
console.log(name,description,price,category,subCategory,sizes,bestseller)
console.log(images)
res.json({})


 }catch(error){
    console.log(error)
    res.json({success:false,message:error.message})

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