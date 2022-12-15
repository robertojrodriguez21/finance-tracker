import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { RegisterUser } from '../services/Auth'
import axios from 'axios'

const CreateProfile = ({BASE_URL}) => {
  const [formValues, setFormValues] = useState({ firstName: '', lastName: '', middleName: '', email: '', password: '', verifyPassword: ''})
  const [passwordVerified, togglePasswordVerified] = useState(true)
  const [emailUsed, toggleEmailUsed] = useState(false)
  const [usersEmails, setUsersEmails] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getUsersEmails = async () => {
      let response = await axios.get(`${BASE_URL}/user/emails`)
      setUsersEmails(response.data)
    }

    getUsersEmails()
  }, [])

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formValues.password !== formValues.verifyPassword) {
      togglePasswordVerified(false)
    } else if (formValues.password === formValues.verifyPassword) {
      togglePasswordVerified(true)
      toggleEmailUsed(false)

      usersEmails.forEach(email => {
        if (email.email === formValues.email) {
          toggleEmailUsed(true)
        } 
      })

      if (!emailUsed && passwordVerified) {
        await RegisterUser({
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          middleName: formValues.middleName,
          email: formValues.email,
          password: formValues.password
        })
  
        togglePasswordVerified(true)
        setFormValues({
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            password: '',
            verifyPassword: ''
        })
        navigate('/')
      } 
    }
  }

  return (
    <>
    <br></br>
    <h1>Create Account</h1>
    <form className="container" onSubmit={handleSubmit}>
      <div className="col-4 offset-4 form-floating mb-3">
        <input required onChange={handleChange} value={formValues.firstName} name='firstName' type="text" className="form-control" id="floatingFirstName" placeholder="First name"></input>
        <label htmlFor="floatingFirstName">First name</label>
      </div>
      <div className="col-4 offset-4 form-floating mb-3">
        <input onChange={handleChange} value={formValues.middleName} name='middleName' type="text" className="form-control" id="floatingMiddleName" placeholder="Middle name"></input>
        <label htmlFor="floatingMiddleName">Middle name</label>
      </div>
      <div className="col-4 offset-4 form-floating mb-3">
        <input required onChange={handleChange} value={formValues.lastName} name='lastName' type="text" className="form-control" id="floatingLastName" placeholder="Last name"></input>
        <label htmlFor="floatingLastName">Last name</label>
      </div>
      {emailUsed ? 
        <div className="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.email} name='email' type="email" className="form-control is-invalid" id="floatingEmail" placeholder="name@example.com"></input>
          <label htmlFor="floatingEmail">Email address</label>
          <div className="invalid-feedback">Email unavailable, try another email or reset password.</div>
        </div> :
        <div className="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.email} name='email' type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"></input>
          <label htmlFor="floatingEmail">Email address</label>
        </div>
      }
      {passwordVerified ? <>
        <div className="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.password} name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.verifyPassword} name='verifyPassword' type="password" className="form-control" id="floatingVerifyPassword" placeholder="Verify password"></input>
          <label htmlFor="floatingVerifyPassword">Verify Password</label>
        </div> 
        </> : <>
        <div className="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.password} name='password' type="password" className="form-control is-invalid" id="floatingPassword" placeholder="Password"></input>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="col-4 offset-4 form-floating mb-3">
          <input required onChange={handleChange} value={formValues.verifyPassword} name='verifyPassword' type="password" className="form-control is-invalid" id="floatingVerifyPassword" placeholder="Verify password"></input>
          <label htmlFor="floatingVerifyPassword">Verify Password</label>
          <div className="invalid-feedback">Passwords don't match, try again.</div>
        </div>
      </> }
      <br></br>
      <button type="submit" className="btn btn-primary">Create Account</button>
    </form>
    <br></br>
    <div className='text-muted'>Already have an account <Link className='text-muted'  to='/'>Login</Link></div>
    </>
  )
}

export default CreateProfile