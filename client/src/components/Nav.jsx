import {Link} from 'react-router-dom'

const Nav = ({user}) => {
  return user ? (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <Link class="navbar-brand" to={'/'}>Finance Tracker</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Accounts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Transactions</a>
            </li>
          </ul>
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hello (User)!</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">My Profile</a>
              <a class="dropdown-item" href="#">Logout</a>
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