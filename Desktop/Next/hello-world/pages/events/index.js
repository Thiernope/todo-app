import React, { useState } from 'react'
import { useRouter } from 'next/router';

const EventList = ({eventList}) => {
    const [events, setEvents] = useState(eventList);
    const router = useRouter();

    const filterSports = async () => {
        const response = await fetch("http://localhost:4000/events?category=sports")
        const data = await response.json();
        setEvents(data)
        router.push("/events?category=sports")
    }
    const filterPolitics = async () => {
        const response = await fetch("http://localhost:4000/events?category=politics")
        const data = await response.json();
        setEvents(data)
        router.push("/events?category=politics")
    }
    
  return (
    <div>
        <h1>All Event</h1>
        <button onClick={filterSports}>Sports</button>
        <button onClick={filterPolitics }>Politics</button>
        {events.map(ev => (
            <div key={ev.id}>
                <h1>{ev.id} / {ev.name} || {ev.category}</h1>
                <p>{ev.description}</p>
            </div>
        ))}
    </div>
  )
}

export default EventList

export async function getServerSideProps(context) { 
    const { params, query} = context;
    const queryString = query.category? `category=${query.category}`: "";
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json();
    return {
        props: {
            eventList: data
        }
    }
}
