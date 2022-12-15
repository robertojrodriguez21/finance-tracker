const Profile = ({user, BASE_URL}) => {
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
    </div>
  )
}

export default Profile