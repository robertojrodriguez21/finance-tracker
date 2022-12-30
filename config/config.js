require('dotenv').config()

module.exports = {
  development: {
    database: 'finance_tracker_development',
    host: '10.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'finance _tracker_test',
    host: '10.0.0.1',
    dialect: 'postgres'
  },
  production: {
    database: 'finance_tracker_production',
    host: '10.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
