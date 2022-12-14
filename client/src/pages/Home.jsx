import Accounts from "./Accounts";

const Home = ({user, BASE_URL}) => {

  return (
    <div className="container text-start">
      <br></br>
      <h1>Welcome back {user.firstName}!</h1>
      <div class="container row">
        <h3 class="col-9" >Your Accounts</h3>
        <button type="button" class=" col-2 btn btn-success">Create Account</button>
      </div>
      <Accounts user={user} BASE_URL={BASE_URL} />
    </div>
  )
}

export default Home