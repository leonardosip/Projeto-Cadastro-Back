const {show} = require('./../services')

const run = async (req) => {
  try {
    const resp = await show({
      params : req.params
    })
    return resp
  } catch (error) {
    throw error
  }
}

module.exports = run