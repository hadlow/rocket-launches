import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return <>
    <Link to={'/'}>Next launch</Link>
    <Link to={'/upcoming'}>Upcoming launches</Link>
  </>
}

export default Header