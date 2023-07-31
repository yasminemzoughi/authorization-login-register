const user = require("../models/user");
const User = require("../models/user")
const bcrypt = require('bcrypt');
const jwt = require ("jsonwebtoken")


exports.register = async(req, res)=> {
 try {
const {name, email,password, phone} = req.body;
const foundUser = await User.findOne({email});
if (foundUser){
    return res 
    .status(400)
    .send({errors: [{msg: "email sould be unique !! try again"}]})
}

//hashed password 
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds)

//new user
const newUser = new User ({...req.body});
newUser.password = hashedPassword;
await newUser.save();

// token creation 
const token = jwt.sign(
    {
        id: newUser._id
    },
   process.env.SECRET_KEY,
   {expiresIn: "1h"}
    );
res.status(200)
.send({msg: "Registered successfully ...", user: newUser, token})
 } catch (error) {
    console.error(error);
    res.status(400).send({errors: [{msg: "email sould be unique  !! "}]})
 }
}

//login 
exports.login = async(req, res)=> {
try {
const {email, password}= req.body;
//check if email exists 
const foundUser = await User.findOne({email})
if (!foundUser){
    return res.status(400)
    .send({errors: [{msg: "Bad credential 1 !! "}]})

}
const checkPassword = await bcrypt.compare(password, foundUser.password)
console.log("checkPassword: ", checkPassword); // add this line to log the value of checkPassword
if (!checkPassword){
    return res.status(400)
    .send({errors: [{msg: "Bad credential 2!! "}]})
}
// token creation 
const token = jwt.sign(
    {
        id: foundUser._id
    },
   process.env.SECRET_KEY,
   {expiresIn: "1h"}
    );
res.status(200).send({msg: "login successfully...", user: foundUser, token})
} catch (error) {
    console.error(error);
    res.status(400).send({msg: "can  not login !!"})
}}