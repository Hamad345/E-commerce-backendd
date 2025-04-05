import mongoose, { Types } from "mongoose";
const productSchema= new mongoose.schema({
    name:{Type:String},
    description:{Type:String},
    price:{Type:Number},
    image:{Type:Array},
    category:{Type:String},
      subCategory:{Type:String},
      size:{Type:Array},
      bestseller:{Type:Boolean},
      date:{Type:Number}
})
const productModel =mongoose.model.product || mongoose.model("product",productSchema)
export default productModel