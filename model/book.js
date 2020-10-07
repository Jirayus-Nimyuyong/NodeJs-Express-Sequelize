const Sequelize = require('sequelize')
const { sequelize } = require('../connect-sequelize')

const Book = sequelize.define('books', {
  books_code: {
    type: Sequelize.STRING
  },
  books_name: {
    type: Sequelize.STRING
  }
},
{ timestamps: false })

module.exports = Book
