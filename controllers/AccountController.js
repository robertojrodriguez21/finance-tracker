const { Account } = require('../models')

const CreateAccount = async (req, res) => {
  try {
    const account = await Account.create({ ...req.body })
    res.send(account)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetAccounts = async (req, res) => {
  try {
    const accounts = await Account.findAll({
      where: { userId: req.params.user_id }
    })
    res.send(accounts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetAccount = async (req, res) => {
  try {
    const account = await Account.findOne({
      where: {
        id: req.params.account_id
      }
    })
    res.send(account)
  } catch (error) {
    throw error
  }
}

const UpdateAccount = async (req, res) => {
  try {
    const account = await Account.update(
      { ...req.body },
      { where: { id: req.params.account_id }, returning: true }
    )
    res.send(account)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteAccount = async (req, res) => {
  try {
    await Account.destroy({ where: { id: req.params.account_id } })
    res.send({
      msg: 'Account Deleted',
      payload: req.params.account_id,
      status: 'Ok'
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetAccounts,
  GetAccount,
  CreateAccount,
  UpdateAccount,
  DeleteAccount
}
