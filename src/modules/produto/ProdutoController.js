const {createUC, deleteUC, listUC, showUC, updateUC } = require('./useCases')

const create = async (req, res) =>{
  try {
   res.send(await createUC(req)) 
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

const remove = async (req, res) =>{
  try {
   res.send(await deleteUC(req)) 
  } catch (error) {
    res.status(500).send(error)
  }
}

const list = async (req, res) =>{
  try {
   res.send(await listUC(req)) 
  } catch (error) {
    res.status(500).send(error)
    
  }
}

const show = async (req, res) =>{
  try {
   res.send(await showUC(req)) 
  } catch (error) {
    res.status(500).send(error)
    
  }
}

const update = async (req, res) =>{
  try {
   res.send(await updateUC(req)) 
  } catch (error) {
    res.status(500).send(error)
    
  }
}

module.exports = {create, remove, list, show, update}