const {sequelize} = require('./../../../db/sequelize')
const {remove} = require('./../services')

const run = async (req) => {
  let transaction = await sequelize.transaction()
  try {
    const resp = await remove({
      params:req.params,
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