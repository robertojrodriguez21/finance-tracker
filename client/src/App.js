import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { CheckSession } from './services/Auth'
// Pages
import Login from './pages/Login'
import CreateProfile from './pages/CreateProfile'
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import CreateTransaction from './pages/CreateTransaction'
import Accounts from './pages/Accounts'
import CreateAccount from './pages/CreateAccount'
import EditAccount from './pages/EditAccount'
import Account from './pages/Account'
import Transaction from './pages/Transaction'
import Profile from './pages/Profile'
// Components
import Nav from './components/Nav'
import Footer from './components/Footer'

const BASE_URL = 'https://my-personal-finance-tracker.herokuapp.com'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  // Logout function
  const handleLogout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  // Checks for user using token
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  // Gets token from browser
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return user && authenticated ? (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Nav
          user={user}
          authenticated={authenticated}
          handleLogout={handleLogout}
        />
      </header>
      <main className="wrapper flex-grow-1">
        <Routes>
          <Route path="/" element={<Home user={user} BASE_URL={BASE_URL} />} />
          <Route
            path="/accounts"
            element={<Accounts user={user} BASE_URL={BASE_URL} />}
          />
          <Route
            path="/accounts/:id"
            element={<Account user={user} BASE_URL={BASE_URL} />}
          />
          <Route
            path="/accounts/create"
            element={<CreateAccount userId={user.id} BASE_URL={BASE_URL} />}
          />
          <Route
            path="/transactions"
            element={<Transactions user={user} BASE_URL={BASE_URL} />}
          />
          <Route
            path="/transactions/:id"
            element={<Transaction user={user} BASE_URL={BASE_URL} />}
          />
          <Route
            path="/accounts/:id/edit"
            element={<EditAccount user={user} BASE_URL={BASE_URL} />}
          />
          <Route
            path="/transactions/create"
            element={<CreateTransaction user={user} BASE_URL={BASE_URL} />}
          />
          <Route
            path="/profile"
            element={
              <Profile
                user={user}
                BASE_URL={BASE_URL}
                handleLogout={handleLogout}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  ) : (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Nav user={user} />
      </header>
      <main className="wrapper flex-grow-1">
        <Routes>
          <Route
            path="/*"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/profile/create"
            element={<CreateProfile BASE_URL={BASE_URL} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
