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
        type: DataTypes.INTEGER,
        allowNull: false
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      minPayment: DataTypes.INTEGER,
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Account',
      tableName: 'accounts'
    }
  )
  return Account
}
