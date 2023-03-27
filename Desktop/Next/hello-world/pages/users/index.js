import React from 'react'
import useSWR from 'swr';

const fetcher = async () => {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();
    return data;
}

const Users = () => {
    const { data, error } = useSWR("users", fetcher);
   if (error) return <h1>An Error has occured</h1>
   if (!data) return <h1>Loading ...</h1>
   return (
    <div>
        {data.map(user => (
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
   )
}

export default Users