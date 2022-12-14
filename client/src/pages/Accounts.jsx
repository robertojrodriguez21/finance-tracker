import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Accounts = ({user, BASE_URL}) => {
  const [accounts, setAccounts] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getUserAccounts = async () => {
      let response = await axios.get(`${BASE_URL}/account/${user.id}`)
      setAccounts(response.data)
    }

    getUserAccounts()
  }, [])

  const accountType = (type) => {
    switch (type) {
      case 1:
        return 'Checking'
        break;
      case 2:
        return 'Savings'
        break;
      case 3:
        return 'Credit Card'
        break;
      case 4:
        return 'Loan'
        break;
      default:
        return 'N/A'
        break;
    }
  }

  return (
    <div className="container text-start">
      <br></br>
      <div class="container row">
        <h1 class="col-10" >Your Accounts</h1>
        <button type="button" class="col-2 btn btn-success btn-lg" onClick={() => {navigate('/accounts/create')}}>Create Account</button>
      </div>
      <br></br>
      <table class="table table-hover">
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
            <tr class="table-active" onClick={() => {navigate(`/account/${account.id}`)}}>
              <th scope="row">{account.name}</th>
              <td>{accountType(account.type)}</td>
              <td>${account.balance.toFixed(2)}</td>
              <td>${account.limit.toFixed(2)}</td>
              {account.minPayment ? 
                <>
                <td>${account.minPayment.toFixed(2)}</td>
                <td>{account.dueDate}</td>
                </> : <>
                <td>No Payment</td> 
                <td>No Payment</td> 
              </>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Accounts