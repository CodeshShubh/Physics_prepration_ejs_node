import jwt from 'jsonwebtoken';

// const SECRET_KEY = 'new_secret_key2';
export const genrateToken  = (user)=>{
const payload = { userId:user._id , name:user.name, email:user.email }

   const token =  jwt.sign(payload , process.env.SECRET_KEY , {expiresIn:'1h'})
   return token
}

export const verifyToken =(token)=>{
    try {
      const decode =   jwt.verify(token , SECRET_KEY )
        return decode;
    } catch (error) {
         return null;
    }
}