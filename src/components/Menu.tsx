import { NavLink } from 'react-router-dom'

export const Menu = (
  {toggleMenu, menuIsOpen}: {toggleMenu: () => void, menuIsOpen: boolean}
) => {
  return (
    <div>

      <button onClick={toggleMenu} className="fixed top-5 left-5 p-2 z-10 bg-gradient-to-b from-green-500 to-blue-500 text-white rounded-full">
        <img src="/src/assets/menu_icon.svg" />
      </button>

      <div className={`${menuIsOpen ? 'w-100' : 'w-0'} fixed top-0 right-0 bottom-0 left-0 bg-indigo-900 bg-opacity-80 backdrop-blur`}></div>

      <nav className={`${menuIsOpen ? 'w-1/2 px-6 border' : 'w-0 px-0 border-0'} fixed top-0 left-0 bottom-0 py-28 bg-indigo-900 bg-opacity-40 overflow-hidden border-white border-opacity-20`}>
        <ul className="flex flex-col justify-between gap-8 font-bold text-gray-300">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/practice">Practice</NavLink></li>
          <li><NavLink to="/stats">Stats</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </nav>

      
    </div>
  )
}
