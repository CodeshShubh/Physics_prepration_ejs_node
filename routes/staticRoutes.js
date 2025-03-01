import express from 'express';
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('./Home.ejs')
})
.get('/Register',(req,res)=>{
    res.render('./auth/Register.ejs')
})
.get('/Login',(req,res)=>{
    res.render('./auth/Login.ejs')
  })
  .get('/Courses',(req,res)=>{
    res.render('./Courses/Courses.ejs')
  })



export default router;
