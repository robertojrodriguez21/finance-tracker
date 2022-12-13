const router = require('express').Router()
const controller = require('../controllers/AccountController')

router.post('/create', controller.CreateAccount)
router.get('/', controller.GetAccounts)
router.get('/:account_id', controller.GetAccount)
router.put('/:account_id', controller.UpdateAccount)
router.delete('/:account_id', controller.DeleteAccount)

module.exports = router
