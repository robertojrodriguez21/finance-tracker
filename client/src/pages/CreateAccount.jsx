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
      <form class="container" onSubmit={handleSubmit}>
        <div class="col-4 offset-4 form-floating">
          <input required onChange={handleChange} value={formValues.name} name='name' type="text" class="form-control" id="floatingName" placeholder="Name"></input>
          <label for="floatingName">Name</label>
        </div>
        <div class="col-4 offset-4 form-group mb-3">
          <label for="accountType" class="form-label mt-4">Type of Account</label>
          <select name='type' onChange={handleChange} class="form-select" id="accountType">
            <option>Select</option>
            <option value={1}>Checking</option>
            <option value={2}>Savings</option>
            <option value={3}>Credit Card</option>
            <option value={4}>Loan</option>
          </select>
        </div>
        <div class="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.balance} name='balance' type="text" class="form-control" id="floatingBalance" placeholder="Balance"></input>
          <label for="floatingBalance">Balance</label>
        </div>
        {parseInt(formValues.type) !== 4 && formValues.type !== '' ? 
        <div class="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.limit} name='limit' type="text" class="form-control" id="floatingLimit" placeholder="Account Limit"></input>
          <label for="floatingLimit">Account Limit</label>
          <small class="text-muted">For checking and saving accounts, enter zero.</small>
        </div> : null}
        {parseInt(formValues.type) === 3 || parseInt(formValues.type) === 4 ? 
        <>
          <div class="col-4 offset-4 form-floating">
            <input required onChange={handleChange} value={formValues.minPayment} name='minPayment' type="text" class="form-control" id="floatingMinPayment" placeholder="Payment Minimum"></input>
            <label for="floatingMinPayment">Payment Minimum</label>
          </div>
          <div class="col-4 offset-4 form-group mb-3">
            <label for="dueDate" class="form-label mt-4">Payment Due Date</label>
            <select name='dueDate' onChange={handleChange} class="form-select" id="dueDate">
              <option>Select</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
            </select>
          </div>
        </> : null}
        <br></br>
        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
      <br></br>
      <small class="text-warning">** ALWAYS CHECK WITH YOUR BANK FOR THE MOST ACCURATE INFORMATION **</small>
    </>
  )
}

export default CreateAccount