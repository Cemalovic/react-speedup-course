import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)

    fetch('http://localhost:3001/meetups/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setIsLoading(false)
        setMeetups(data)
      })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={meetups} />
    </section>
  )
}

export default AllMeetupsPage
