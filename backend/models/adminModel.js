import mongoose from "mongoose"

const adminSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true},
        password:{type:String, required:true},
        admin:{type:Boolean, default:false},

    },{minimize:false}
)

const adminModel = mongoose.model.admin || mongoose.model("admin",adminSchema);

export default adminModel;