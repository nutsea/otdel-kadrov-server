const {Networking} = require('../models/models')

class NetworkingController {
    async create(req, res) {
        const {question, answer1, answer2, answer3, answer4, correct_answer} = req.body
        const item = await Networking.create({question, answer1, answer2, answer3, answer4, correct_answer})
        return res.json(item)
    }

    async getAll(req, res) {
        const questions = await Networking.findAll()
        return res.json(questions)
    }

    async getOne(req, res) {
        const {networking_id} = req.body
        const question = await Networking.findAll({where: {id: networking_id}})
        return res.json(question)
    }
}

module.exports = new NetworkingController()