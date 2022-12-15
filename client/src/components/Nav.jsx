import {Link, useNavigate} from 'react-router-dom'

const Nav = ({user, authenticated, handleLogout}) => {
  let navigate = useNavigate()
  return user && authenticated ? (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>Finance Tracker</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to={'/accounts'}>Accounts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/transactions'}>Transactions</Link>
            </li>
          </ul>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hi, {user.firstName}!</a>
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={() => {navigate('/profile')}}>My Profile</button>
              <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>Finance Tracker</Link>
      </div>
    </nav>
  )
}

export default Nav