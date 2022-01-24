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
    return <div>Error loading next launch</div>
  if(!isLoaded)
    return <div>Loading...</div>

  return <div className="flex flex-1 flex-col w-full items-center justify-evenly">
    <div className="text-center">
      <h2 className="text-sm uppercase font-bold">Next launch</h2>
      <h1 className="text-4xl">{launch.name}</h1>
    </div>

    <div className="flex flex-col justify-center text-center">
      <div className="mb-6">
        <div className="text-6xl">{duration.days()}</div>
        <div className="text-xs rounded px-5 py-2 bg-teal-300 uppercase font-bold">Days</div>
      </div>

      <div className="mb-6">
        <div className="text-6xl">{duration.hours()}</div>
        <div className="text-xs rounded px-5 py-2 bg-teal-300 uppercase font-bold">Hours</div>
      </div>

      <div className="mb-6">
        <div className="text-6xl">{duration.minutes()}</div>
        <div className="text-xs rounded px-5 py-2 bg-teal-300 uppercase font-bold">Minutes</div>
      </div>
      
      <div className="">
        <div className="text-6xl">{duration.seconds()}</div>
        <div className="text-xs rounded px-5 py-2 bg-teal-300 uppercase font-bold">Seconds</div>
      </div>
    </div>
  </div>
}

export default Next