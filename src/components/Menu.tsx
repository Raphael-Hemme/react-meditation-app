import { NavLink } from 'react-router-dom';

export const Menu = ({
  toggleMenu,
  menuIsOpen,
}: {
  toggleMenu: () => void;
  menuIsOpen: boolean;
}) => {
  return (
    <div>
      <button
        onClick={toggleMenu}
        className="fixed left-7 top-7 z-10 rounded-full bg-gradient-to-b from-green-500 to-blue-500 p-2 text-white"
      >
        <img src="/src/assets/menu_icon.svg" />
      </button>

      <div
        className={`${menuIsOpen ? 'w-full' : 'w-0'} fixed bottom-0 left-0 right-0 top-0 bg-indigo-900 bg-opacity-80 backdrop-blur transition-all duration-300 ease-in-out`}
      ></div>

      <nav
        className={`${menuIsOpen ? 'w-1/2 border px-6' : 'w-0 border-0 px-0'} fixed bottom-0 left-0 top-0 overflow-hidden border-white border-opacity-20 bg-indigo-900 bg-opacity-40 py-28 transition-all duration-200 ease-in-out`}
      >
        <ul className="flex flex-col justify-between gap-8 font-bold text-gray-300">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/practice">Practice</NavLink>
          </li>
          <li>
            <NavLink to="/stats">Stats</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};