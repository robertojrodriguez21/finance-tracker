import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <br></br>
    <h1>Login</h1>
    <form className="container" action="">
      <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 form-floating mb-3">
        <input required type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 form-floating">
        <input required type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
        <label for="floatingPassword">Password</label>
      </div>
      <br></br>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br></br>
    <Link class='text-muted' to='/createProfile'>Create Account</Link>
    <br></br>
    <Link class='text-muted' to='/resetPassword'>Forgot Password</Link>
    </>
  )
}

export default Login