import { useNavigate } from "react-router-dom";
import Accounts from "./Accounts";

const Home = ({user, BASE_URL}) => {
  let navigate = useNavigate()

  return (
    <div className="container text-start">
      <br></br>
      <h1>Welcome back {user.firstName}!</h1>
      <hr></hr>
      <div class="container row">
        <h3 class="col-10" >Your Accounts</h3>
        <button type="button" class=" col-2 btn btn-success" onClick={() => {navigate('/createAccount')}}>Create Account</button>
      </div>
      <br></br>
      <Accounts user={user} BASE_URL={BASE_URL} />
    </div>
  )
}

export default Home