const router = require('express').Router()
const controller = require('../controllers/TransactionController')

router.post('/create', controller.CreateTransaction)
router.get('/:user_id', controller.GetTransactions)
router.get('/:user_id/:transaction_id', controller.GetTransaction)
router.put('/:user_id/:transaction_id', controller.UpdateTransaction)
router.delete('/:user_id/:transaction_id', controller.DeleteTransaction)

module.exports = router
