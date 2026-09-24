import { useEffect, useState } from 'react'

export default function UserPosts() {
  const [users, setUsers] = useState()
  const [currentUser, setCurrentUser] = useState()
  const [posts, setPosts] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  if (!users || error)
    return (
      <div className='min-h-screen flex items-center justify-center fixed inset-0'>
        <p>Something went wrong</p>
      </div>
    )

  return (
    <>
      <div className='flex gap-2 items-center'>
        <h3 className='text-xl font-bold'>Select user:</h3>
        <select
          name='users'
          className='my-4 border rounded-md p-2'
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
        >
          <option value=''>Click to select</option>
          {users?.map((el) => (
            <option className='border-b my-3' key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
      {loading && (
        <div className='min-h-screen flex items-center justify-center '>
          <p>Please wait...</p>
        </div>
      )}

      {posts?.map((el) => (
        <div key={el.id} className='my-3 p-3 border-b'>
          <h3 className='font-bold text-2xl mb-2'>{el.title}</h3>
          <div>{el.body}</div>
        </div>
      ))}
    </>
  )
}
