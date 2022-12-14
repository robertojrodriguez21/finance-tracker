const router = require('express').Router()
const controller = require('../controllers/AccountController')

router.post('/create', controller.CreateAccount)
router.get('/:user_id', controller.GetAccounts)
router.get('/:user_id/:account_id', controller.GetAccount)
router.put('/:user_id/:account_id', controller.UpdateAccount)
router.delete('/:user_id/:account_id', controller.DeleteAccount)

module.exports = router
