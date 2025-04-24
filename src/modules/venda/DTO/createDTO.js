const Joi = require('joi')

module.exports = Joi.object({
  pessoa_id: Joi.number().required(),
  produto_id: Joi.number().required(),
  conta_bancaria_id : Joi.number().required(),
  valor : Joi.number().required()
}).required().unknown(true)