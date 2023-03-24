import React from 'react'

const Users = ({users, todos}) => {
  return (
    <div>
       <h1>All users</h1>
       {users.map(user => (
        <h4 key={user.id}>{user.email}</h4>
       ))}

       <h1>All todos</h1>

       {todos.map(todo => (
        <p key={todo.id}>{todo.title}</p>
       ))}
    </div>
  )
}

export default Users