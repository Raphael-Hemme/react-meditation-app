import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type MenuEmbeddedInPageOptions = 'HOME' | 'SETTINGS' | 'PRACTICE' | 'STATS';

export const Menu = () => {
  const location = useLocation();

  const [displayedNavItems, setDisplayedNavItems] = useState([
    {
      path: '/stats',
      imgSrc: '/src/assets/bar_chart_icon.svg',
      ariaLabel: 'Statistics',
    },
    {
      path: '/settings',
      imgSrc: '/src/assets/settings_icon.svg',
      ariaLabel: 'Settings',
    },
  ]);

  useEffect(() => {
    console.log('Test');
  }, [location]);

  return (
    <div className="absolute bottom-2 left-0 right-0 w-full p-5">
      <nav className="w-full">
        <ul className="flex justify-between gap-4 font-bold text-violet-700">
          {displayedNavItems.map((navItem) => (
            <li
              className="rounded-full border-2 border-violet-500 p-2"
              key={navItem.path}
            >
              <NavLink to={navItem.path} aria-label={navItem.ariaLabel}>
                <img src={navItem.imgSrc} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
