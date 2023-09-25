const {Security} = require('../models/models')

class SecurityController {
    async create(req, res) {
        const {question, answer1, answer2, answer3, answer4, correct_answer} = req.body
        const item = await Security.create({question, answer1, answer2, answer3, answer4, correct_answer})
        return res.json(item)
    }

    async getAll(req, res) {
        const questions = await Security.findAll()
        return res.json(questions)
    }

    async getOne(req, res) {
        const {security_id} = req.body
        const question = await Security.findAll({where: {id: security_id}})
        return res.json(question)
    }
}

module.exports = new SecurityController()