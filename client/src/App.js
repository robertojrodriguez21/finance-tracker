import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { CheckSession } from './services/Auth'
// Pages
import Login from './pages/Login'
import CreateProfile from './pages/CreateProfile'
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import EditTransaction from './pages/EditTransaction'
import CreateTransaction from './pages/CreateTransaction'
import Accounts from './pages/Accounts'
import CreateAccount from './pages/CreateAccount'
import Account from './pages/Account'
import Transaction from './pages/Transaction'
// Components
import Nav from './components/Nav'

const BASE_URL = 'http://localhost:3001'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [transactions, setTransactions] = useState([])

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
    <div className="App">
      <header>
        <Nav
          user={user}
          authenticated={authenticated}
          handleLogout={handleLogout}
        />
      </header>
      <main>
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
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/:id" element={<Transaction />} />
          <Route path="/transactions/:id/edit" element={<EditTransaction />} />
          <Route path="/transactions/create" element={<CreateTransaction />} />
        </Routes>
      </main>
    </div>
  ) : (
    <div className="App">
      <header>
        <Nav user={user} />
      </header>
      <main>
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
    </div>
  )
}

export default App
