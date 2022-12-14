import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const CreateAccount = () => {
  const [formValues, setFormValues] = useState({ userId: '', name: '', type: '', limit: '', balance: '', minPayment: '', dueDate: '' })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let newAccount = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      middleName: formValues.middleName,
      email: formValues.email,
      password: formValues.password
    }

    setFormValues({ userId: '', name: '', type: '', limit: '', balance: '', minPayment: '', dueDate: '' })
    navigate('/accounts')
  }

  return (
    <>
      <br></br>
      <h1>Create Account</h1>
      <form class="container" onSubmit={handleSubmit}>
        <div class="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.firstName} name='firstName' type="text" class="form-control" id="floatingFirstName" placeholder="First name"></input>
          <label for="floatingFirstName">First name</label>
        </div>
        <div class="col-4 offset-4 form-floating mb-3">
          <input onChange={handleChange} value={formValues.middleName} name='middleName' type="text" class="form-control" id="floatingMiddleName" placeholder="Middle name"></input>
          <label for="floatingMiddleName">Middle name</label>
        </div>
        <div class="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.lastName} name='lastName' type="text" class="form-control" id="floatingLastName" placeholder="Last name"></input>
          <label for="floatingLastName">Last name</label>
        </div>
        <br></br>
        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
    </>
  )
}

export default CreateAccount