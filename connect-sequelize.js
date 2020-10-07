const config = require('config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.get('db.database'), config.get('db.user'), config.get('db.pass'), {
  host: config.get('db.host'),
  dialect: config.get('db.dialect'),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const connectDB = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })
  // sequelize.sync({ force: true })
  //   .then(() => {
  //     console.log('Database & tables created!')
  //   })
}

module.exports = {
  sequelize,
  connectDB
}
