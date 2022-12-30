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
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
