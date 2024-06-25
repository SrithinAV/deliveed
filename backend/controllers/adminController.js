import adminModel from "../models/adminModel.js";
import bcrypt from "bcrypt"
import validator from "validator";

const loginAdmin = async (req,res)=>
{


    try {
        const { password} = req.body;
       
        const admin = await adminModel.findOne({admin:true});
        if(!admin)
        {
                return res.json({message:"Admin doesn't exists"})
        }

        const isMatch = await bcrypt.compare(password,admin.password);
        if(!isMatch)
        {
            return res.json({message:"Invalid Credential"});
        }

        res.json({success:true, message:"success"});

        
    } catch (error) {
        console.log(error);
    res.json({success:false,message:"error"});
    }



}

const registerAdmin = async (req, res)=>
{
    try {
    const {name, password, email} = req.body;

  const exists = await adminModel.findOne({admin:true});

  if(exists)
  {
   return res.json({message:"admin already exists"});
  }

   if(!validator.isEmail(email))
   {
     return res.json({message:"Invalid Email"});
   }

   if(password.length < 8)
   {
     
    return res.json({message:"Give a strong password!"});
   
   }

 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const admin = new adminModel(
        {
            name:name,
            email:email,
            password:hashedPassword,
            admin:true
        }
    )

    await admin.save();
    res.json({success:true, message:"Created Successfully"});

    
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"error"});

    
  }

   
}

export {loginAdmin, registerAdmin};