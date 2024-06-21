import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Menu } from '../components/Menu';

export const Root = () => {
  const containerBaseClass = 'w-screen h-100 min-h-screen p-10 bg-gradient-to-b from-green-100 to-blue-200';
  let containerCondClass = '';
  
  const [containerClassList, setContainerClassList] = useState(containerBaseClass);
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }
  
  return (
    <div className={`${containerBaseClass} ${containerCondClass}`}>

      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu}/>

      <main>
        <Outlet />
      </main>

    </div>
  )
}
