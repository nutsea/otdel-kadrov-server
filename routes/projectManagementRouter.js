const Router = require('express')
const router = new Router()
const projectManagementController = require('./../controllers/projectManagementController')

router.post('/', projectManagementController.create)
router.get('/', projectManagementController.getAll)
router.get('/one', projectManagementController.getOne)

module.exports = router