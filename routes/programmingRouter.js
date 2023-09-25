const Router = require('express')
const router = new Router()
const programmingController = require('./../controllers/programmingController')

router.post('/', programmingController.create)
router.get('/', programmingController.getAll)
router.get('/one', programmingController.getOne)

module.exports = router