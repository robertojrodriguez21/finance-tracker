require('dotenv').config()

module.exports = {
  development: {
    database: 'finance_tracker_development',
    dialect: 'postgres'
  },
  test: {
    database: 'finance _tracker_test',
    dialect: 'postgres'
  },
  production: {
    database: 'finance_tracker_production',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
