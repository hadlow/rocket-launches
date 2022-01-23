import React from 'react'
import { NavLink } from 'react-router-dom'

import spacexLogo from '../assets/SpaceX-Logo.png'

const Header = () => {
  return <header>
    <div className="flex flex-col md:flex-row py-4">
      <div className="mx-auto mb-4 md:mx-0 md:mb-0"><img src={spacexLogo} width={200} /></div>

      <div className="flex mx-auto md:mx-0 md:ml-auto">
        <NavLink to={'/'} exact="true" className={({ isActive }) => (isActive ? 'font-bold' : 'ml-auto')}>Next launch</NavLink>
        <NavLink to={'/upcoming'} className={({ isActive }) => (isActive ? 'ml-6 font-bold' : 'ml-6')}>Upcoming launches</NavLink>
      </div>
    </div>
  </header>
}

export default Header