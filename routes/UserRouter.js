const router = require('express').Router()
const controller = require('../controllers/UserController')

router.post('/create', controller.CreateUser)
router.get('/', controller.GetUsers)
router.get('/emails', controller.GetUsersEmails)
router.get('/:user_id', controller.GetUser)
router.put('/:user_id', controller.UpdateUser)
router.delete('/:user_id', controller.DeleteUser)

module.exports = router
