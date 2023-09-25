const Router = require('express')
const router = new Router()
const databasesController = require('./../controllers/databasesController')

router.post('/', databasesController.create)
router.get('/', databasesController.getAll)
router.get('/one', databasesController.getOne)

module.exports = router