const {Test} = require('../models/models')

class TestController {
    async create(req, res) {
        const {databases_id, security_id, networking_id, projectmanagement_id, webtech_id, programming_id, itbasics_id} = req.body
        const test = await Test.create({databases_id, security_id, networking_id, projectmanagement_id, webtech_id, programming_id, itbasics_id})
        return res.json(test)
    }

    async getOne(req, res) {
        const {id} = req.body
        const test = await Test.findOne({where: {test_id: id}})
        return res.json(test)
    }

    async getRandom(req, res) {
        const tests = await Test.findAll()
        const randomIndex = Math.floor(Math.random() * tests.length)
        const randomTest = tests[randomIndex]
        return res.json(randomTest)
    }
}

module.exports = new TestController()