import { useEffect, useState } from 'react'

export default function UserList() {
  const [users, setUsers] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  if (!users || error) return <p>Something went wrong</p>
  if (loading) return <p>Please wait...</p>

  return (
    <ul className='my-4 '>
      {users.map((el) => (
        <li className='border-b my-3' key={el.id}>
          {el.name}
        </li>
      ))}
    </ul>
  )
}
