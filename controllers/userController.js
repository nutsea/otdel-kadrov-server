const {User} = require('../models/models')

class UserController {
    async create(req, res) {
        const {name, surname, otchestvo, address, birthdate, education} = req.body
        const user = await User.create({name, surname, otchestvo, address, birthdate, education})
        return res.json(user)
    }
}

module.exports = new UserController()