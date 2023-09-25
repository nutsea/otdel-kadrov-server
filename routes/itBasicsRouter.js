const Router = require('express')
const router = new Router()
const itBasicsController = require('./../controllers/itBasicsController')

router.post('/', itBasicsController.create)
router.get('/', itBasicsController.getAll)
router.get('/one', itBasicsController.getOne)

module.exports = router