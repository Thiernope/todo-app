import React from 'react'
import Users from '/components/users';
import Link from 'next/link';

const UsersPage = ({users, todos}) => {
  return (
  <>
  <Link href="/">home</Link>
  <Users users={users} todos={todos}/>
  </>
  )
}

export default UsersPage

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const todoResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
    const todoData = await todoResponse.json();
    return {
        props: {
            users: data,
            todos: todoData
        }
    }
}