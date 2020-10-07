const Sequelize = require('sequelize')
const { sequelize } = require('../connect-sequelize')

const User = sequelize.define('users', {
  users_code: {
    type: Sequelize.STRING
  },
  users_name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.INTEGER
  },
  mobile_phone_no: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
},
{ timestamps: false })

module.exports = User
