import Accounts from "./Accounts";
import Transactions from "./Transactions";

const Home = ({user, BASE_URL}) => {
  return (
    <div className="container text-start">
      <br></br>
      <h1>Welcome back {user.firstName}!</h1>
      <hr></hr>
      <Accounts user={user} BASE_URL={BASE_URL} />
      <hr />
      <Transactions user={user} BASE_URL={BASE_URL} />
    </div>
  )
}

export default Home