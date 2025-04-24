const Joi = require('joi')

module.exports = Joi.object({
  nome: Joi.string().required(),
  grupo: Joi.string().required(),
  sub_grupo : Joi.string().required(),
  valor : Joi.number().required()
}).required().unknown(true)