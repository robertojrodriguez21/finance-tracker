import axios from "axios"
import { useNavigate } from "react-router-dom"

const Profile = ({user, BASE_URL, handleLogout}) => {
  let navigate = useNavigate()

  const deleteProfile = async () => {
    await axios.delete(`${BASE_URL}/user/${user.id}`)
    handleLogout()
    navigate('/')
  }

  return (
    <div className="container text-start">
      <br />
      <h1>My Profile</h1>
      <hr />
      <h3>First Name: <span className="text-info">{user.firstName}</span></h3>
      <h3>Middle Name: <span className="text-info">{user.middleName}</span></h3>
      <h3>Last Name: <span className="text-info">{user.lastName}</span></h3>
      <h3>Email: <span className="text-info">{user.email}</span></h3>
      <hr />
      <h3 className="text-danger">** ALL BUTTON CLICKS ARE FINAL **</h3>
      <div className="container d-grid gap-4">
      <button type="button" className="col-2 btn btn-danger btn-lg" onClick={deleteProfile}>Delete Profile</button>
      </div>
    </div>
  )
}

export default Profile