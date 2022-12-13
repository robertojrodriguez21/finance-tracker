const { Transaction } = require('../models')

const CreateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({ ...req.body })
    res.send(transaction)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll()
    res.send(transactions)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      where: {
        id: req.params.transaction_id
      }
    })
    res.send(transaction)
  } catch (error) {
    throw error
  }
}

const UpdateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.update(
      { ...req.body },
      { where: { id: req.params.transaction_id }, returning: true }
    )
    res.send(transaction)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteTransaction = async (req, res) => {
  try {
    await Transaction.destroy({ where: { id: req.params.transaction_id } })
    res.send({
      msg: 'Transaction Deleted',
      payload: req.params.transaction_id,
      status: 'Ok'
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetTransactions,
  GetTransaction,
  CreateTransaction,
  UpdateTransaction,
  DeleteTransaction
}
