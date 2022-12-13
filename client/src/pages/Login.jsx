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
      <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 form-floating mb-3">
        <input required onChange={handleChange} value={formValues.email} name='email' type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 form-floating">
        <input required onChange={handleChange} value={formValues.password} name='password' type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
        <label for="floatingPassword">Password</label>
      </div>
      <br></br>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br></br>
    <div class='text-muted'>Need an account <Link class='text-muted'  to='/createProfile'>Create Account</Link></div>
    <div class='text-muted' >Forgot your password <Link class='text-muted' to='/resetPassword'>Reset Password</Link></div>
    </>
  )
}

export default Login