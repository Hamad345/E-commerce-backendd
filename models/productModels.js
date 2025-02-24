import mongoose, { Types } from "mongoose";
const productSchema= new mongoose.schema({
    name:{Type:String,required:true},
    description:{Type:String,required:true},
    price:{Type:Number,required:true},
    image:{Type:Array,required:true},
    category:{Type:String,required:true},
      subCategory:{Type:String,required:true},
      size:{Type:Array,required:true},
      bestseller:{Type:Boolean},
      date:{Type:Number,required:true}
})
const productModel =mongoose.model.product || mongoose.model("product",productSchema)
export default productModel