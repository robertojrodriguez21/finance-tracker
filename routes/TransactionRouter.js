const router = require('express').Router()
const controller = require('../controllers/TransactionController')

router.post('/create', controller.CreateTransaction)
router.get('/', controller.GetTransactions)
router.get('/:transaction_id', controller.GetTransaction)
router.put('/:transaction_id', controller.UpdateTransaction)
router.delete('/:transaction_id', controller.DeleteTransaction)

module.exports = router
