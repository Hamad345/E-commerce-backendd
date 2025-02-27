// import mongoose, { Types } from "mongoose";
// const userSchema=new mongoose.Schema({
//     name:{Type:String,required:true},
//     email:{Type:String,required:true,unique:true},
//     password:{Type:String,required:true},
//     cardData:{Type:Object,default:{} }
// },{minimize:false})
// const userModel =mongoose.models.user || mongoose.model("user",userSchema)
// export default userModel

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cardData: {
    type: Object,
    default: {},
  },
}, { minimize: false });

const userModels = mongoose.models.User || mongoose.model("User", userSchema);

export default userModels