import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <br></br>
    <h1>Login</h1>
    <form className="container" action="">
      <div class="col-lg-4 offset-lg-4 form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="col-lg-4 offset-lg-4 form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
        <label for="floatingPassword">Password</label>
      </div>
      <br></br>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br></br>
    <Link class='text-muted' to='/createProfile'><p>Create Account</p></Link>
    <Link class='text-muted' to='/resetPassword'><p>Forgot Password</p></Link>
    </>
  )
}

export default Login