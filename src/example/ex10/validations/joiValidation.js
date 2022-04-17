const Joi = require("joi");
const validationFn = (data) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(10).required(),
      sname: Joi.string().min(3).max(18).required(),
      age: Joi.number().integer().required(),
    });
  
    return schema.validate(data);
}

module.exports = validationFn;