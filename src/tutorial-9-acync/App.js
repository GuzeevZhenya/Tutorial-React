import React, { useState } from 'react'

export const App = () => {
  const [users, setUsers] = useState([])

  // const getUsers = () => {
  //   fetch('https://62b04e1fb0a980a2ef4fe953.mockapi.io/users').then((data) => {
  //     data.json().then((result) => {
  //       setUsers(result)
  //     })
  //   })
  // }

  const getUsers = async () => {
    try {
      const resp = await fetch(
        'https://62b04e1fb0a980a2ef4fe953.mockapi.io/users',
      )
      const data = await resp.json()
      setUsers(data)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>
      <ul>
        {users.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => getUsers()}>Show users</button>
    </div>
  )
}
