const {ProjectManagement} = require('../models/models')

class ProjectManagementController {
    async create(req, res) {
        const {question, answer1, answer2, answer3, answer4, correct_answer} = req.body
        const item = await ProjectManagement.create({question, answer1, answer2, answer3, answer4, correct_answer})
        return res.json(item)
    }

    async getAll(req, res) {
        const questions = await ProjectManagement.findAll()
        return res.json(questions)
    }

    async getOne(req, res) {
        const {projectmanagement_id} = req.body
        const question = await ProjectManagement.findAll({where: {id: projectmanagement_id}})
        return res.json(question)
    }
}

module.exports = new ProjectManagementController()