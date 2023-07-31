//1 require express
const express = require("express");
const { register, login } = require("../controllers/user");
const { registerValidation, validation, loginValidation } = require("../middleware/validator");
const isAuth = require("../middleware/isAuth");

// 2 route 
const router = express.Router();
//4 routes
//register
router.post("/register",registerValidation(),validation ,register);

// test
router.get("/test", (req,res)=>{
    res.send("hello world")
})

//login
router.post("/login", loginValidation(),validation ,login);

//current user 
router.get("/current", isAuth, (req,res) =>
{
    res.send(req.user)
})

//3 export
module.exports = router;
