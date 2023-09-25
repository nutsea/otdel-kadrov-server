const {ItBasics} = require('../models/models')

class ItBasicsController {
    async create(req, res) {
        const {question, answer1, answer2, answer3, answer4, correct_answer} = req.body
        const item = await ItBasics.create({question, answer1, answer2, answer3, answer4, correct_answer})
        return res.json(item)
    }

    async getAll(req, res) {
        const questions = await ItBasics.findAll()
        return res.json(questions)
    }

    async getOne(req, res) {
        const {itbasics_id} = req.body
        const question = await ItBasics.findAll({where: {id: itbasics_id}})
        return res.json(question)
    }
}

module.exports = new ItBasicsController()