'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.hasMany(models.Transaction, { foreignKey: 'accountId' })
      Account.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Account.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      limit: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      balance: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      minPayment: DataTypes.DOUBLE,
      dueDate: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Account',
      tableName: 'accounts'
    }
  )
  return Account
}
