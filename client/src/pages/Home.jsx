const Home = ({user}) => {
  return (
    <div className="container text-start">
      <br></br>
      <h1>Welcome back {user.firstName}!</h1>
      <div class="container row">
        <h3 class="col-9" >Your Accounts</h3>
        <button type="button" class=" col-2 btn btn-success">Create Account</button>
      </div>
      <div className="container">
        
      </div>
    </div>
  )
}

export default Home