import validate from 'express-joi-validation';
import Joi from 'joi';


export const validators = validate.createValidator({});



export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});


export const registerSchema = Joi.object({
  fullname: Joi.string().min(5).max(40).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(20).required(),
})