//1 require mongoose 
const mongoose = require ("mongoose")
const bcrypt = require('bcrypt');
//2 schema
const {Schema, model} = mongoose;
// 3 model 
const UserSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone:Number

})
// Define the comparePassword method
UserSchema.methods.comparePassword = async function(password) {
    const isMatch = await bcrypt.compare(password, this.password)
    return isMatch
  }
//4 export 
module.exports = User = model("user", UserSchema);