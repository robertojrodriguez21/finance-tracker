import { useState, useEffect } from "react";
import axios from "axios";

const CreateTransaction = ({user, BASE_URL}) => {
  const [formValues, setFormValues] = useState({accountId: '', name: '', date: '', amount: '', transactionType: ''})
  const [accounts, setAccounts] = useState([])
  const [selectedAccountType, setSelectedAccountType] = useState({selectedAccountTypeState: 0})

  useEffect(() => {
    const getUserAccounts = async () => {
      let response = await axios.get(`${BASE_URL}/account/${user.id}`)
      setAccounts(response.data)
    }

    getUserAccounts()
  }, [])

  const onChange = (e) => {
    handleChange(e)
    setAccountType(e.target.value)
  }

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const setAccountType = (accountId) => {
    for (let i = 0; i < accounts.length; i++) {
      if (parseInt(accounts[i].id) === parseInt(accountId)) {
        setSelectedAccountType({selectedAccountTypeState: parseInt(accounts[i].type)})
      }
    }
  }

  const handleSubmit = (e) => {

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
  
  return (
    <>
    <br></br>
    <h1>Create Transaction</h1>
    <form className="container" onSubmit={handleSubmit}>
      <div className="col-4 offset-4 form-group mb-3">
        <label htmlFor="accountId" className="form-label mt-4">Select Account</label>
        <select name='accountId' onChange={onChange} className="form-select" id="accountId">
          <option>Select Account</option>
          {accounts.map((account) => (
            <option key={account.id} value={account.id} onClick={() => console.log('HIT')} >{account.name} - {accountType(account.type)}</option>
          ))}
        </select>
      </div>

      <div className="col-4 offset-4 form-floating mb-3">
        <input required onChange={handleChange} value={formValues.name} name='name' type="text" className="form-control" id="floatingName" placeholder="Name"></input>
        <label htmlFor="floatingName">Name</label>
      </div>
      <div className="col-4 offset-4 form-floating mb-3">
        <input required onChange={handleChange} value={formValues.date} name='date' type="date" className="form-control" id="floatingDate" placeholder="Date"></input>
        <label htmlFor="floatingDate">Date</label>
      </div>
      <div className="col-4 offset-4 form-floating mb-3">
        <input required onChange={handleChange} value={formValues.amount} name='amount' type="text" className="form-control" id="floatingAmount" placeholder="Amount"></input>
        <label htmlFor="floatingAmount">Amount</label>
      </div>
      <button type="submit" className="btn btn-primary">Create Transaction</button>
    </form>
    </>
  )
}

export default CreateTransaction