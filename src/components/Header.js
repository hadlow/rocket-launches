import React from 'react'
import { NavLink } from 'react-router-dom'

import spacexLogo from '../assets/SpaceX-Logo.png'

const Header = () => {
  return <header>
    <div className="flex py-4">
      <img src={spacexLogo} width={200} />

      <NavLink to={'/'} exact={true} className={({ isActive }) => (isActive ? 'ml-auto font-bold' : 'ml-auto')}>Next launch</NavLink>
      <NavLink to={'/upcoming'} className={({ isActive }) => (isActive ? 'ml-6 font-bold' : 'ml-6')}>Upcoming launches</NavLink>
    </div>
  </header>
}

export default Header