import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const Account = ({user, BASE_URL}) => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [account, setAccount] = useState({name: '', userId: 0, type: 0, limit: 0.0, balance: 0.0, minPayment: 0.0, dueDate: ''})
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const getUserTransactions = async () => {
      let response = await axios.get(`${BASE_URL}/transaction/${user.id}`)
      setTransactions(response.data)
    }

    getUserTransactions()
  }, [])

  useEffect(() => {
    const getAccount = async () => {
      let response = await axios.get(`${BASE_URL}/account/${user.id}/${id}`)
      setAccount(response.data)
    }

    getAccount()
  }, [])

  const accountType = (type) => {
    switch (type) {
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

  const dueDateString = (date) => {
    switch (date) {
      case 1:
        return '1st of each month'
      case 2:
        return '2nd of each month'
      case 3:
        return '3rd of each month'
      case 21:
        return '21st of each month'
      case 22:
        return '22nd of each month'
      case 23:
        return '23rd of each month'
      default:
        return date + 'th of each month'
    }
  }

  const deleteAccount = async () => {
    await axios.delete(`${BASE_URL}/account/${user.id}/${id}`)
    navigate(`/accounts`)
  }

  const getDate = (date) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + 1)
    return newDate.toDateString()
  }

  const setBalance = (account) => {
    let currentBalance = account.balance

    transactions.map((transaction) => {
      if (parseInt(account.id) === parseInt(transaction.accountId)) {
        switch (transaction.transactionType) {
          case 1:
            currentBalance -= transaction.amount
            break;
          case 2:
            currentBalance += transaction.amount
            break;
          case 3:
            currentBalance += transaction.amount
            break;
          case 4:
            currentBalance -= transaction.amount
            break;
          default:
            break;
        }
      }
    })

    return currentBalance
  }

  return (
    <div className="container text-start">
      <br />
      <div className="container row">
        <h1 className="col-8">{account.name} <small className="text-muted">{accountType(account.type)}</small></h1>
        <button type="button" className="col-2 btn btn-warning btn-lg" onClick={() => navigate(`/accounts/${id}/edit`)}>Edit</button>
        <button type="button" className="col-2 btn btn-danger btn-lg" onClick={deleteAccount}>Delete</button>
      </div>
      <hr />
      <h2>Balance</h2>
      <h5>${setBalance(account).toFixed(2)}</h5>
      <h2>Limit</h2>
      {account.limit || account.limit === 0 ? 
        <h5>${account.limit.toFixed(2)}</h5> :
        <h5>Limit not available</h5>
      }
      {account.minPayment ? <>
        <h2>Payment Minimum</h2>
        <h5>${account.minPayment.toFixed(2)}</h5>
        <h2>Payment Due Date</h2>
        <h5>{dueDateString(account.dueDate)}</h5>
        </> : <>
        <h2>Payment Minimum</h2>
        <h5>No payment</h5>
        <h2>Payment Due Date</h2>
        <h5>No payment</h5>
      </>}
      <hr />
      <div className="container row">
        <h1 className="col-10" >Transactions</h1>
        <button type="button" className="col-2 btn btn-success btn-lg" onClick={() => {navigate('/transactions/create')}}>Create Transaction</button>
      </div>
      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Account</th>
            <th scope="col">Date</th>
            <th scope="col">Transaction Type</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            transaction.accountId === account.id ?
            <tr key={transaction.id} className="table-active" onClick={() => {navigate(`/transactions/${transaction.id}`)}}>
              <th scope="row">{transaction.name}</th>
              <td>{account.name} <small className="text-muted">{accountType(account.type)}</small></td>
              <td>{getDate(transaction.date)}</td>
              {transaction.transactionType === 1 ? <td className="text-danger">Transaction/Purchase</td> : null}
              {transaction.transactionType === 2 ? <td className="text-success">Deposit</td> : null}
              {transaction.transactionType === 3 ? <td className="text-danger">Transaction/Purchase</td> : null}
              {transaction.transactionType === 4 ? <td className="text-success">Payment</td> : null}
              <td>${transaction.amount.toFixed(2)}</td>
            </tr>
            : null
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Account