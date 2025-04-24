const {sequelize} = require('./../../../db/sequelize')
const {update} = require('./../services')

const run = async (req) => {
  let transaction = await sequelize.transaction()
  try {
    const resp = await update({
      params:req.params,
      data:req.body,
      transaction
    })
    await transaction.commit()
    return resp
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

module.exports = run