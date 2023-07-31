const {check, validationResult} = require("express-validator")

exports.registerValidation = () =>
[
check("name","Name is required !").not().isEmpty(),
check("email","Enter a valid Email !!").isEmail(),
check("password","Password must be at least 6 characters !!").isLength({min: 6}),
]

exports.loginValidation = () =>
[
check("email","Enter a valid Email !!").isEmail(),
check("password","Password must be at least 6 characters !!").isLength({min: 6})
.custom(async (value, {req}) => {
    const user = await User.findOne({email: req.body.email})
    if (!user) {
      throw new Error('Invalid email or password')
    }
    const isPasswordMatch = await user.comparePassword(value)
    if (!isPasswordMatch) {
      throw new Error('Invalid email or password')
    }
  }),
]


exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
next();
}