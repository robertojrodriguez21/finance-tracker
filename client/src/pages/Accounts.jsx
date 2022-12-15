import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Accounts = ({user, BASE_URL}) => {
  const [accounts, setAccounts] = useState([])
  const [transactions, setTransactions] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getUserAccounts = async () => {
      let response = await axios.get(`${BASE_URL}/account/${user.id}`)
      setAccounts(response.data)
    }

    getUserAccounts()
  }, [])

  useEffect(() => {
    const getUserTransactions = async () => {
      let response = await axios.get(`${BASE_URL}/transaction/${user.id}`)
      setTransactions(response.data)
    }

    getUserTransactions()
  }, [])

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

  return (
    <div className="container text-start">
      <br></br>
      <div className="container row">
        <h1 className="col-10">Accounts</h1>
        <button type="button" className="col-2 btn btn-success btn-lg" onClick={() => {navigate('/accounts/create')}}>Create Account</button>
      </div>
      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Balance</th>
            <th scope="col">Limit</th>
            <th scope="col">Payment Minimum</th>
            <th scope="col">Payment Due Date</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id} className="table-active" onClick={() => {navigate(`/accounts/${account.id}`)}}>
              <th scope="row">{account.name}</th>
              <td>{accountType(account.type)}</td>
              <td>${setBalance(account).toFixed(2)}</td>
              {account.limit || account.limit === 0 ? 
                <td>${account.limit.toFixed(2)}</td> :
                <td>Limit not available</td>
              }
              {account.minPayment ? <>
                <td>${account.minPayment.toFixed(2)}</td>
                <td>{dueDateString(account.dueDate)}</td>
                </> : <>
                <td>No payment</td> 
                <td>No payment</td> 
              </>}
            </tr>
          ))}
        </tbody>
      </table>
      <small className="text-warning">** ALWAYS CHECK WITH YOUR ACCOUNT PROVIDER FOR CORRECT INFORMATION **</small>
    </div>
  )
}

export default Accounts