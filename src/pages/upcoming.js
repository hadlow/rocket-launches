import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Upcoming = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [launches, setLaunches] = useState([])
  const [launchpads, setLaunchpads] = useState([])

  const getUpcoming = () => {
    fetch("https://api.spacexdata.com/v4/launches/upcoming")
      .then(res => res.json())
      .then(
        (launches) => {
          setIsLoaded(true)
          setLaunches(launches)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }

  const getLaunchpads = () => {
    fetch("https://api.spacexdata.com/v4/launchpads")
      .then(res => res.json())
      .then(
        (launchpads) => {
          setIsLoaded(true)
          setLaunchpads(launchpads)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }

  const getLaunchpad = (id) => {
    return launchpads.find(lp => lp.id === id)
  }

  useEffect(() => {
    getUpcoming()
    getLaunchpads()
  }, [])

  if(error)
    return <div>Error: {error.message}</div>
  if(!isLoaded)
    return <div>Loading launches...</div>

  return <>
    <table className="w-full">
      <thead className="font-bold">
        <tr>
          <td>Mission</td>
          <td>Launch date (UTC)</td>
          <td>Launchpad</td>
        </tr>
      </thead>

      <tbody>
        {launches.map(l =>
          <tr key={l.id}>
            <td>{l.name}</td>
            <td>{moment(l.date_utc).format('MMM Do YYYY, H:mm')}</td>
            <td>{getLaunchpad(l.launchpad)?.name}</td>
          </tr>
        )}
      </tbody>
    </table>
  </>
}

export default Upcoming