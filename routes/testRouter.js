const Router = require('express')
const router = new Router()
const testController = require('./../controllers/testController')

router.post('/', testController.create)
router.get('/', testController.getOne)
router.get('/random', testController.getRandom)

module.exports = router