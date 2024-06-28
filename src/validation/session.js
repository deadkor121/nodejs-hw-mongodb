import Joi from 'joi';

export const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required().messages({
    'string.base': `"refreshToken" should be a type of 'text'`,
    'string.empty': `"refreshToken" cannot be an empty field`,
    'any.required': `"refreshToken" is a required field`,
  }),
});
