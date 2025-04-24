const {list} = require('./../services')

const run = async (req) => {
  try {
    const resp = await list()
    return resp
  } catch (error) {
    throw error
  }
}

module.exports = run