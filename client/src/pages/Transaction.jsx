import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Transaction = ({user, BASE_URL}) => {
  let { id } = useParams()
  const [transaction, setTransaction] = useState({userId: '', accountId: '', name: '', date: '', amount: 0.0})
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const getUserTransaction = async () => {
      let response = await axios.get(`${BASE_URL}/transaction/${user.id}/${id}`)
      setTransaction(response.data)
    }

    getUserTransaction()
  }, [])

  useEffect(() => {
    const getUserAccounts = async () => {
      let response = await axios.get(`${BASE_URL}/account/${user.id}`)
      setAccounts(response.data)
    }

    getUserAccounts()
  }, [])

  const getAccountName = (accountId) => {
    for (let i = 0; i < accounts.length; i++) {
      if (accountId === accounts[i].id) {
        return accounts[i].name
      }
    }
  }

  const getAccountType = (accountId) => {
    for (let i = 0; i < accounts.length; i++) {
      if (accountId === accounts[i].id) {
        switch (accounts[i].type) {
          case 1:
            return 'Checking'
          case 2:
            return 'Savings'
          case 3:
            return 'Credit Card'
          case 4:
            return 'Loan'
          default:
            return 'N/A'
        }
      }
    }
  }

  return (
    <div className="container text-start">
      <br></br>
      <h1 className="col-10" >{transaction.name}</h1>
      <hr />
      <h2>Account</h2>
      <h5>{getAccountName(transaction.accountId)} <small className="text-muted">{getAccountType(transaction.accountId)}</small></h5>
      <h2>Date</h2>
      <h5>{transaction.date}</h5>
      <h2>Amount</h2>
      <h5>${transaction.amount.toFixed(2)}</h5>
    </div>
  )
}

export default Transaction