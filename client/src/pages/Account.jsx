import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Account = ({user, BASE_URL}) => {
  let { id } = useParams()
  const [account, setAccount] = useState()

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
      default:
        return date + 'th of each month'
    }
  }

  return (
    <div className="container text-start">
      <br />
      <h1>{account.name} <small className="text-muted">{accountType(account.type)}</small></h1>
      <hr />
      <h2>Balance</h2>
      <h5>${account.balance.toFixed(2)}</h5>
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
        <h5>No Payment</h5>
        <h2>Payment Due Date</h2>
        <h5>No Payment</h5>
      </>}
    </div>
  )
}

export default Account