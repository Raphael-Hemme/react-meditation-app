import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Root = () => {
  const containerBaseClass = 'w-screen h-screen p-10 bg-gray-100';
  let containerCondClass = '';
  
  const [containerClassList, setContainerClassList] = useState(containerBaseClass);
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }
  
  return (
    <div className={`${containerBaseClass} ${containerCondClass}`}>
      
      <button onClick={toggleMenu} className="p-2 bg-indigo-600 text-white rounded-full"><img src="/src/assets/menu_icon.svg" /></button>

      <nav className={menuIsOpen ? 'opacity-100' : 'opacity-0'}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/practice">Practice</NavLink></li>
          <li><NavLink to="/stats">Stats</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </nav>

      <main>
        <Outlet />
{/*         <h1>Present</h1>
        <p>Present is a simple app that helps you practice be present in the moment.</p> */}
      </main>

    </div>
  )
}
