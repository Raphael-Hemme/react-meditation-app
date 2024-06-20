import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Root = () => {
  const containerBaseClass = 'w-screen h-100 p-10 bg-gradient-to-b from-green-100 to-blue-200';
  let containerCondClass = '';
  
  const [containerClassList, setContainerClassList] = useState(containerBaseClass);
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }
  
  return (
    <div className={`${containerBaseClass} ${containerCondClass}`}>
      
      <button onClick={toggleMenu} className="fixed top-5 left-5 p-2 z-10 bg-gradient-to-b from-green-500 to-blue-500 text-white rounded-full">
        <img src="/src/assets/menu_icon.svg" />
      </button>

      <nav className={`${menuIsOpen ? 'w-1/2 px-6' : 'w-0 px-0'} fixed top-0 left-0 bottom-0 py-28 bg-purple-200 overflow-hidden`}>
        <ul className="flex flex-col justify-between gap-5">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/practice">Practice</NavLink></li>
          <li><NavLink to="/stats">Stats</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

    </div>
  )
}
