const {Programming} = require('../models/models')

class ProgrammingController {
    async create(req, res) {
        const {question, answer1, answer2, answer3, answer4, correct_answer} = req.body
        const item = await Programming.create({question, answer1, answer2, answer3, answer4, correct_answer})
        return res.json(item)
    }

    async getAll(req, res) {
        const questions = await Programming.findAll()
        return res.json(questions)
    }

    async getOne(req, res) {
        const {programming_id} = req.body
        const question = await Programming.findAll({where: {id: programming_id}})
        return res.json(question)
    }
}

module.exports = new ProgrammingController()