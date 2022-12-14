import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'

const Login = (props) => {
  const [formValues, setFormValues] = useState({ email: '', password: ''})
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({email: '', password: ''})
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate('/')
  }

  return (
    <>
    <br></br>
    <h1>Login</h1>
    <form className="container" onSubmit={handleSubmit}>
      <div className="col-4 offset-4 form-floating mb-3">
        <input required onChange={handleChange} value={formValues.email} name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="col-4 offset-4 form-floating">
        <input required onChange={handleChange} value={formValues.password} name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <br></br>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    <br></br>
    <div className='text-muted'>Need an account <Link className='text-muted'  to='/profile/create'>Create Account</Link></div>
    <div className='text-muted' >Forgot your password <Link className='text-muted' to='/resetPassword'>Reset Password</Link></div>
    </>
  )
}

export default Login