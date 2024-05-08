const Joi = require("joi");

const validateUser = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .required()
    .min(6)
    .max(30)
    .pattern(/^[a-zA-Z0-9!@#$%^&*()]+$/)
    .message(
      "Password must be between 6 and 30 characters long and contain only alphanumeric characters and special characters !@#$%^&*()"
    ),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .error(new Error("Passwords must match")),
  accountType: Joi.string().valid("User", "Admin").required(),
});

module.exports = { validateUser };
