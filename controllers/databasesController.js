const {Databases} = require('../models/models')

class DatabasesController {
    async create(req, res) {
        const {question, answer1, answer2, answer3, answer4, correct_answer} = req.body
        const item = await Databases.create({question, answer1, answer2, answer3, answer4, correct_answer})
        return res.json(item)
    }

    async getAll(req, res) {
        const questions = await Databases.findAll()
        return res.json(questions)
    }

    async getOne(req, res) {
        const {databases_id} = req.body
        const question = await Databases.findAll({where: {id: databases_id}})
        return res.json(question)
    }
}

module.exports = new DatabasesController()