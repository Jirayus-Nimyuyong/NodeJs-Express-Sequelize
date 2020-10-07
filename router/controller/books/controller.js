const Book = require('../../../model/book')

const createBook = (req, res) => {
  try {
    const { code, name } = req.body
    Book.create({
      books_code: code,
      books_name: name
    })
      .then(() => {
        res.status(201).json({
          status: 201,
          message: 'Created Success'
        })
      })
      .catch(error => res.json(error))
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const getBook = (req, res) => {
  try {
    Book.findAll()
      .then(users => res.status(200).json(users))
      .catch(error => res.status(500).json(error))
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const getBookById = (req, res) => {
  try {
    const { Id } = req.params
    Book.findAll({ where: { books_code: Id } })
      .then(users => res.status(200).json(users))
      .catch(error => res.status(500).json(error))
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const updateBook = (req, res) => {
  try {
    const {
      params: { Id },
      body: { code, name }
    } = req
    Book.update({
      books_code: code,
      books_name: name
    }, {
      where: {
        books_code: Id
      }
    })
      .then(() => {
        res.status(200).json({
          status: 200,
          message: 'Updated Success'
        })
      })
      .catch(error => res.status(500).json(error))
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const deletBook = (req, res) => {
  try {
    const { Id } = req.params
    Book.destroy({
      where: {
        books_code: Id
      }
    })
      .then(() => {
        res.status(200).json({
          status: 200,
          message: 'Deleted Success'
        })
      })
      .catch(error => res.status(500).json(error))
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

module.exports = {
  createBook,
  getBook,
  getBookById,
  updateBook,
  deletBook
}
