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
    <h1 className="text-4xl font-bold mt-8">Upcoming launches</h1>

    <table className="w-full mt-5">
      <thead className="font-bold border-b">
        <tr>
          <td>Mission</td>
          <td>Launch date (UTC)</td>
          <td>Launchpad</td>
          <td>Favourite</td>
        </tr>
      </thead>

      <tbody>
        {launches.map(l =>
          <tr key={l.id}>
            <td>{l.name}</td>
            <td>{moment(l.date_utc).format('MMM Do YYYY, H:mm')}</td>
            <td>{getLaunchpad(l.launchpad)?.name}</td>
            <td><div className="text-xl cursor-pointer">&#9734; &#9733;</div></td>
          </tr>
        )}
      </tbody>
    </table>
  </>
}

export default Upcoming