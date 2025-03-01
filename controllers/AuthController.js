import User from "../models/AuthModel.js";
import bcrypt from "bcrypt";
import { genrateToken } from "../utils/jwt.js";

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });

    if (existUser)
      return res
        .status(400)
        .json({ Status: "Failure", Message: "User Exist with this Email" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // call genreatToken and send newUser
    const token = genrateToken(newUser)

    res
    .cookie('token', token , {httpOnly:true})
      .status(201)
      .json({ Status: "Success", Message: "User Created Successfully" , newUser});
  } catch (error) {
    res
      .status(500)
      .json({ Status: "Failure", Message: `Server Error : ${error}` });
  }
};


export const Login = async(req,res)=>{
    try {

        const {email, password} = req.body;

    const user = await User.findOne({email})
          if(!user)
            return res.status(400).json({Status:'Failure' , Message: 'User Not Exist Please Login First'})

          const comparePassword = await bcrypt.compare(password , user.password)

          if(!comparePassword)
          return res.status(400).json({Status:'Failure' , Message: 'User Email OR Password Incorrect'})

         const token =  genrateToken(user);

          res
          .cookie('token', token , {httpOnly:true})
          .status(200).json({Stauts:'Success', Message:'Login Successfully', user })
        
    } catch (error) {
        res
      .status(500)
      .json({ Status: "Failure", Message: `Server Error : ${error}` });
    }
}