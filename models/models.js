const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', 
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false},
        surname: {type: DataTypes.STRING, allowNull: false},
        otchestvo: {type: DataTypes.STRING},
        address: {type: DataTypes.TEXT},
        birthdate: {type: DataTypes.DATEONLY},
        education: {type: DataTypes.TEXT}
    }, 
    {
        tableName: 'users'
    }
)

const Databases = sequelize.define('databases',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        question: {type: DataTypes.TEXT, allowNull: false},
        answer1: {type: DataTypes.TEXT, allowNull: false},
        answer2: {type: DataTypes.TEXT, allowNull: false},
        answer3: {type: DataTypes.TEXT, allowNull: false},
        answer4: {type: DataTypes.TEXT, allowNull: false},
        correct_answer: {type: DataTypes.INTEGER, allowNull: false}
    },
    {
        tableName: 'databases'
    }
)

const Security = sequelize.define('security',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        question: {type: DataTypes.TEXT, allowNull: false},
        answer1: {type: DataTypes.TEXT, allowNull: false},
        answer2: {type: DataTypes.TEXT, allowNull: false},
        answer3: {type: DataTypes.TEXT, allowNull: false},
        answer4: {type: DataTypes.TEXT, allowNull: false},
        correct_answer: {type: DataTypes.INTEGER, allowNull: false}
    },
    {
        tableName: 'security'
    }
)

const Networking = sequelize.define('networking',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        question: {type: DataTypes.TEXT, allowNull: false},
        answer1: {type: DataTypes.TEXT, allowNull: false},
        answer2: {type: DataTypes.TEXT, allowNull: false},
        answer3: {type: DataTypes.TEXT, allowNull: false},
        answer4: {type: DataTypes.TEXT, allowNull: false},
        correct_answer: {type: DataTypes.INTEGER, allowNull: false}
    },
    {
        tableName: 'networking'
    }
)

const ProjectManagement = sequelize.define('project_management',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        question: {type: DataTypes.TEXT, allowNull: false},
        answer1: {type: DataTypes.TEXT, allowNull: false},
        answer2: {type: DataTypes.TEXT, allowNull: false},
        answer3: {type: DataTypes.TEXT, allowNull: false},
        answer4: {type: DataTypes.TEXT, allowNull: false},
        correct_answer: {type: DataTypes.INTEGER, allowNull: false}
    },
    {
        tableName: 'project_management'
    }
)

const WebTech = sequelize.define('web_tech',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        question: {type: DataTypes.TEXT, allowNull: false},
        answer1: {type: DataTypes.TEXT, allowNull: false},
        answer2: {type: DataTypes.TEXT, allowNull: false},
        answer3: {type: DataTypes.TEXT, allowNull: false},
        answer4: {type: DataTypes.TEXT, allowNull: false},
        correct_answer: {type: DataTypes.INTEGER, allowNull: false}
    },
    {
        tableName: 'webtech'
    }
)

const Programming = sequelize.define('programming',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        question: {type: DataTypes.TEXT, allowNull: false},
        answer1: {type: DataTypes.TEXT, allowNull: false},
        answer2: {type: DataTypes.TEXT, allowNull: false},
        answer3: {type: DataTypes.TEXT, allowNull: false},
        answer4: {type: DataTypes.TEXT, allowNull: false},
        correct_answer: {type: DataTypes.INTEGER, allowNull: false}
    },
    {
        tableName: 'programming'
    }
)

const ItBasics = sequelize.define('it_basics',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        question: {type: DataTypes.TEXT, allowNull: false},
        answer1: {type: DataTypes.TEXT, allowNull: false},
        answer2: {type: DataTypes.TEXT, allowNull: false},
        answer3: {type: DataTypes.TEXT, allowNull: false},
        answer4: {type: DataTypes.TEXT, allowNull: false},
        correct_answer: {type: DataTypes.INTEGER, allowNull: false}
    },
    {
        tableName: 'it_basics'
    }
)

const Test = sequelize.define('tests', 
    {
        test_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
    },
    {
        tableName: 'tests'
    }
)

Test.belongsTo(Databases, {foreignKey: 'databases_id'})
Databases.hasOne(Test, {foreignKey: 'databases_id'})

Test.belongsTo(Security, {foreignKey: 'security_id'})
Security.hasOne(Test, {foreignKey: 'security_id'})

Test.belongsTo(Networking, {foreignKey: 'networking_id'})
Networking.hasOne(Test, {foreignKey: 'networking_id'})

Test.belongsTo(ProjectManagement, {foreignKey: 'projectmanagement_id'})
ProjectManagement.hasOne(Test, {foreignKey: 'projectmanagement_id'})

Test.belongsTo(WebTech, {foreignKey: 'webtech_id'})
WebTech.hasOne(Test, {foreignKey: 'webtech_id'})

Test.belongsTo(Programming, {foreignKey: 'programming_id'})
Programming.hasOne(Test, {foreignKey: 'programming_id'})

Test.belongsTo(ItBasics, {foreignKey: 'itbasics_id'})
ItBasics.hasOne(Test, {foreignKey: 'itbasics_id'})


module.exports = {
    User,
    Databases,
    Security,
    Networking,
    ProjectManagement,
    WebTech,
    Programming,
    ItBasics,
    Test
}