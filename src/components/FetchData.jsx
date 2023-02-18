import axios from "axios"
import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = () => {

    // using Fetch
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     setIsLoading(false)

    //     setUsers(data)
    //   })

    //data fetching using Axios

    axios.get(`https://jsonplaceholder.typicode.com/users`).then((data)=>{
        setIsLoading(true);
        setUsers(data.data)
        });
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch