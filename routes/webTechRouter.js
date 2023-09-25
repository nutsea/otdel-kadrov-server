const Router = require('express')
const router = new Router()
const webTechController = require('./../controllers/webTechController')

router.post('/', webTechController.create)
router.get('/', webTechController.getAll)
router.get('/one', webTechController.getOne)

module.exports = router