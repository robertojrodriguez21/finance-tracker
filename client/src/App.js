import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// Pages
import Login from './pages/Login'
import CreateProfile from './pages/CreateProfile'
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import EditTransaction from './pages/EditTransaction'
import CreateTransaction from './pages/CreateTransaction'
import Accounts from './pages/Accounts'
import CreateAccount from './pages/CreateAccount'
// Components
import Nav from './components/Nav'
import Account from './components/Account'
import Transaction from './components/Transaction'

function App() {
  const [user, setUser] = useState()

  return user ? (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/accounts/:id" element={<Account />} />
          <Route path="/accounts/create" element={<CreateAccount />} />
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
          <Route path="/" element={<Login />} />
          <Route path="/createProfile" element={<CreateProfile />} />
          <Route path="/accounts" element={<Login />} />
          <Route path="/accounts/:id" element={<Login />} />
          <Route path="/accounts/:id/edit" element={<Login />} />
          <Route path="/transactions" element={<Login />} />
          <Route path="/transactions/:id" element={<Login />} />
          <Route path="/transactions/:id/edit" element={<Login />} />
          <Route path="/transactions/create" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
