const {sequelize} = require('./../../../db/sequelize')
const {create} = require('./../services')

const run = async (req) => {
  let transaction = await sequelize.transaction()
  try {
    const resp = await create({
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