import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const CreateAccount = ({userId, BASE_URL}) => {
  const [formValues, setFormValues] = useState({ name: '', type: '', limit: '', balance: '', minPayment: '', dueDate: '' })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let newAccount = {
      userId: userId, 
      name: formValues.name, 
      type: parseInt(formValues.type), 
      limit: parseFloat(formValues.limit), 
      balance: parseFloat(formValues.balance), 
      minPayment: parseFloat(formValues.minPayment), 
      dueDate: parseInt(formValues.dueDate)
    }

    axios.post(`${BASE_URL}/account/create`, newAccount)

    setFormValues({ name: '', type: '', limit: '', balance: '', minPayment: '', dueDate: '' })
    navigate('/accounts')
  }

  return (
    <>
      <br></br>
      <h1>Create Account</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div className="col-4 offset-4 form-floating">
          <input required onChange={handleChange} value={formValues.name} name='name' type="text" className="form-control" id="floatingName" placeholder="Name"></input>
          <label htmlFor="floatingName">Name</label>
        </div>
        <div className="col-4 offset-4 form-group mb-3">
          <label htmlFor="accountType" className="form-label mt-4">Type of Account</label>
          <select name='type' onChange={handleChange} className="form-select" id="accountType">
            <option>Select</option>
            <option value={1}>Checking</option>
            <option value={2}>Savings</option>
            <option value={3}>Credit Card</option>
            <option value={4}>Loan</option>
          </select>
        </div>
        <div className="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.balance} name='balance' type="text" className="form-control" id="floatingBalance" placeholder="Balance"></input>
          <label htmlFor="floatingBalance">Balance</label>
        </div>
        {parseInt(formValues.type) !== 4 && formValues.type !== '' ? 
        <div className="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.limit} name='limit' type="text" className="form-control" id="floatingLimit" placeholder="Account Limit"></input>
          <label htmlFor="floatingLimit">Account Limit</label>
          <small className="text-muted">For checking and saving accounts, enter the number 0.</small>
        </div> : null}
        {parseInt(formValues.type) === 3 || parseInt(formValues.type) === 4 ? 
        <>
          <div className="col-4 offset-4 form-floating">
            <input required onChange={handleChange} value={formValues.minPayment} name='minPayment' type="text" className="form-control" id="floatingMinPayment" placeholder="Payment Minimum"></input>
            <label htmlFor="floatingMinPayment">Payment Minimum</label>
          </div>
          <div className="col-4 offset-4 form-group mb-3">
            <label htmlFor="dueDate" className="form-label mt-4">Payment Due Date</label>
            <select name='dueDate' onChange={handleChange} className="form-select" id="dueDate">
              <option>Select</option>
              <option value={1}>1st</option>
              <option value={2}>2nd</option>
              <option value={3}>3rd</option>
              <option value={4}>4th</option>
              <option value={5}>5th</option>
              <option value={6}>6th</option>
              <option value={7}>7th</option>
              <option value={8}>8th</option>
              <option value={9}>9th</option>
              <option value={10}>10th</option>
              <option value={11}>11th</option>
              <option value={12}>12th</option>
              <option value={13}>13th</option>
              <option value={14}>14th</option>
              <option value={15}>15th</option>
              <option value={16}>16th</option>
              <option value={17}>17th</option>
              <option value={18}>18th</option>
              <option value={19}>19th</option>
              <option value={20}>20th</option>
              <option value={21}>21st</option>
              <option value={22}>22nd</option>
              <option value={23}>23rd</option>
              <option value={24}>24th</option>
              <option value={25}>25th</option>
              <option value={26}>26th</option>
              <option value={27}>27th</option>
              <option value={28}>28th</option>
            </select>
            <small className="text-muted">For the 29th, 30th, and 31st of the month select 28th.</small>
          </div>
        </> : null}
        <br></br>
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
      <br></br>
      <small className="text-warning">** ALWAYS CHECK WITH YOUR ACCOUNT PROVIDER FOR CORRECT INFORMATION **</small>
    </>
  )
}

export default CreateAccount