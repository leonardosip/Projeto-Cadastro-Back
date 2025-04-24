module.exports = async (DTO, data) => {
  try {
    await DTO.validateAsync(data)
  } catch (error) {
    throw {DTO: error }
  }
}