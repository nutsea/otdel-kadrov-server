const Router = require('express')
const router = new Router()
const securityController = require('./../controllers/securityController')

router.post('/', securityController.create)
router.get('/', securityController.getAll)
router.get('/one', securityController.getOne)

module.exports = router