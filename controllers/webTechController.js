const {WebTech} = require('../models/models')

class WebTechController {
    async create(req, res) {
        const {question, answer1, answer2, answer3, answer4, correct_answer} = req.body
        const item = await WebTech.create({question, answer1, answer2, answer3, answer4, correct_answer})
        return res.json(item)
    }

    async getAll(req, res) {
        const questions = await WebTech.findAll()
        return res.json(questions)
    }

    async getOne(req, res) {
        const {webtech_id} = req.body
        const question = await WebTech.findAll({where: {id: webtech_id}})
        return res.json(question)
    }
}

module.exports = new WebTechController()