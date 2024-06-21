import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../components/Menu';

export const Root = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="h-100 min-h-screen w-screen bg-gradient-to-b from-green-100 to-blue-200 px-10 py-4">
      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
