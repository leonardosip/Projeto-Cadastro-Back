const express = require('express')
const router = express.Router()
const ctl = require('./modules/controllers')

router.get('/',(req,res) => {
  res.send('API no ar')
})

router.post('/produto', ctl.produto.create)
router.delete('/produto/:id', ctl.produto.remove)
router.get('/produto', ctl.produto.list)
router.get('/produto/:id', ctl.produto.show)
router.put('/produto/:id', ctl.produto.update)



router.post('/pessoa', ctl.pessoa.create)
router.delete('/pessoa/:id', ctl.pessoa.remove)
router.get('/pessoa', ctl.pessoa.list)
router.get('/pessoa/:id', ctl.pessoa.show)
router.put('/pessoa/:id', ctl.pessoa.update)

router.post('/conta_bancaria', ctl.conta_bancaria.create)
router.delete('/conta_bancaria/:id', ctl.conta_bancaria.remove)
router.get('/conta_bancaria', ctl.conta_bancaria.list)
router.get('/conta_bancaria/:id', ctl.conta_bancaria.show)
router.put('/conta_bancaria/:id', ctl.conta_bancaria.update)

router.post('/venda', ctl.venda.create)
router.delete('/venda/:id', ctl.venda.remove)
router.get('/venda', ctl.venda.list)
router.get('/venda/:id', ctl.venda.show)
router.put('/venda/:id', ctl.venda.update)


module.exports = router;
