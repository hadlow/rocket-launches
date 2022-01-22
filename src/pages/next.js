import React, { useState, useEffect } from 'react'

const Next = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [launch, setLaunche] = useState([])

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches/next")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setLaunche(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if(error)
    return <div>Error: {error.message}</div>
  if(!isLoaded)
    return <div>Loading...</div>

  return <>

  </>
}

export default Next