const User = require('../../../model/user')

const createUser = (req, res) => {
  try {
    const {
      code,
      name,
      password,
      type,
      mobilePhone,
      email
    } = req.body
    User.create({
      users_code: code,
      users_name: name,
      password: password,
      type: type,
      mobile_phone_no: mobilePhone,
      email: email
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

const getUser = async (req, res) => {
  try {
    User.findAll()
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

const getUserById = (req, res) => {
  try {
    const { Id } = req.params
    User.findAll({ where: { users_code: Id } })
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

const updateUser = (req, res) => {
  try {
    const {
      params: { Id },
      body: {
        code,
        name,
        password,
        type,
        mobilePhone,
        email
      }
    } = req
    User.update({
      users_code: code,
      users_name: name,
      password: password,
      type: type,
      mobile_phone_no: mobilePhone,
      email: email
    }, {
      where: {
        users_code: Id
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

const deleteUser = (req, res) => {
  try {
    const { Id } = req.params
    User.destroy({
      where: {
        users_code: Id
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
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser
}
