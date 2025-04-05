import mongoose, { Types } from "mongoose";
const userSchema=new mongoose.Schema({
    name:{Types:String},
    email:{Types:String},
    password:{Types:String},
    cardData:{Types:Object,default:{} }
},{minimize:false})
const userModel =mongoose.models.user || mongoose.model("user",userSchema)
export default userModel

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   cardData: {
//     type: Object,
//     default: {},
//   },
// }, { minimize: false });

// const userModels = mongoose.models.User || mongoose.model("User", userSchema);

// export default userModels