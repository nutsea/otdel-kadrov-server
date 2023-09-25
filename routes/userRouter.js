const Router = require('express')
const router = new Router()
const userController = require('./../controllers/userController')

router.post('/', userController.create)

module.exports = router