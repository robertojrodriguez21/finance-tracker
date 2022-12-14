import {Link, useNavigate} from 'react-router-dom'

const Nav = ({user, authenticated, handleLogout}) => {
  let navigate = useNavigate()
  return user && authenticated ? (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <Link class="navbar-brand" to={'/'}>Finance Tracker</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link class="nav-link" to={'/accounts'}>Accounts</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={'/transactions'}>Transactions</Link>
            </li>
          </ul>
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hello {user.firstName}!</a>
            <div class="dropdown-menu">
              <button class="dropdown-item" href="#">My Profile</button>
              <button class="dropdown-item" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <Link class="navbar-brand" to={'/'}>Finance Tracker</Link>
      </div>
    </nav>
  )
}

export default Nav