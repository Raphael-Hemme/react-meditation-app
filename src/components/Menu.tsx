import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type PageOption = '/' | '/practice' | '/settings' | '/stats';
type NavItem = {
  path: PageOption;
  imgSrc: string;
  ariaLabel: string;
};

const allNavItems: NavItem[] = [
  {
    path: '/',
    imgSrc: '/src/assets/home_icon.svg',
    ariaLabel: 'Home',
  },
  {
    path: '/practice',
    imgSrc: '/src/assets/self_improvement_icon_s.svg',
    ariaLabel: 'Practice',
  },
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
];

const getNavItemsForPage = (path: PageOption): NavItem[] => {
  switch (path) {
    case '/stats':
      return allNavItems.filter((item) => item.path !== '/stats');
    case '/settings':
      return allNavItems.filter((item) => item.path !== '/settings');
    case '/practice':
      return allNavItems.filter(
        (item) => item.path === '/' || item.path === '/settings'
      );
    default: // root / home as default
      return allNavItems.filter(
        (item) => item.path === '/settings' || item.path === '/stats'
      );
  }
};

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
    setDisplayedNavItems(getNavItemsForPage(location.pathname as PageOption));
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
