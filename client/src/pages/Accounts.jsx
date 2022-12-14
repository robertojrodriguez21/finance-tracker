import { useEffect, useState } from "react"
import axios from "axios"

const Accounts = ({user, BASE_URL}) => {
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const getUserAccounts = async () => {
      let response = await axios.get(`${BASE_URL}/account/${user.id}`)
      setAccounts(response.data)
    }

    getUserAccounts()
  }, [])

  return (
    <div className="container">
      x
    </div>
  )
}

export default Accounts