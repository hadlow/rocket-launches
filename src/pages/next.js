import React, { useState, useEffect, useRef, useCallback } from 'react'
import moment from 'moment'

import durationFromTime from '../helpers/durationFromTime'

const Next = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [launch, setLaunch] = useState([])
  const [duration, setDuration] = useState(moment())
  const timer = useRef(0)

  const timerCallback = useCallback(() => {
    setDuration(durationFromTime(launch?.date_unix * 1000))
  }, [launch])

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches/next")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setLaunch(result)
          setDuration(durationFromTime(result?.date_unix * 1000))
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  useEffect(() => {
    timer.current = setInterval(timerCallback, 1000)

    return () => {
      clearInterval(timer.current)
    }
  }, [launch])

  if(error)
    return <div>Error: {error.message}</div>
  if(!isLoaded)
    return <div>Loading...</div>

  return <>
    <h2 className="">Next launch</h2>
    <h1 className="text-2xl text-bold">{launch.name}</h1>

    <div className="flex flex-col">
      <div className="">
        <div className="">{duration.days()}</div>
        <div className="">Days</div>
      </div>

      <div className="">
        <div className="">{duration.hours()}</div>
        <div className="">Hours</div>
      </div>

      <div className="">
        <div className="">{duration.minutes()}</div>
        <div className="">Minutes</div>
      </div>
      
      <div className="">
        <div className="">{duration.seconds()}</div>
        <div className="">Seconds</div>
      </div>
    </div>
  </>
}

export default Next