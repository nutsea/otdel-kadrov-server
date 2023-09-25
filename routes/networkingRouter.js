const Router = require('express')
const router = new Router()
const networkingController = require('./../controllers/networkingController')

router.post('/', networkingController.create)
router.get('/', networkingController.getAll)
router.get('/one', networkingController.getOne)

module.exports = router