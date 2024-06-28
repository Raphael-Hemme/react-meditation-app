import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type PageOption = '/' | '/practice' | '/settings' | '/stats' | '/info';
type NavItem = {
  path: PageOption;
  svgPath: string;
  ariaLabel: string;
};

const allNavItems: NavItem[] = [
  {
    path: '/',
    svgPath:
      'M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z',
    ariaLabel: 'Home',
  },
  {
    path: '/info',
    svgPath:
      'M480-680q-33 0-56.5-23.5T400-760q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760q0 33-23.5 56.5T480-680Zm-60 560v-480h120v480H420Z',
    ariaLabel: 'More information',
  },
  {
    path: '/practice',
    svgPath:
      'M272-160q-30 0-51-21t-21-51q0-21 12-39.5t32-26.5l156-62v-90q-54 63-125.5 96.5T120-320v-80q68 0 123.5-28T344-508l54-64q12-14 28-21t34-7h40q18 0 34 7t28 21l54 64q45 52 100.5 80T840-400v80q-83 0-154.5-33.5T560-450v90l156 62q20 8 32 26.5t12 39.5q0 30-21 51t-51 21H400v-20q0-26 17-43t43-17h120q9 0 14.5-5.5T600-260q0-9-5.5-14.5T580-280H460q-42 0-71 29t-29 71v20h-88Zm208-480q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z',
    ariaLabel: 'Practice',
  },
  {
    path: '/stats',
    svgPath:
      'M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z',
    ariaLabel: 'Statistics',
  },
  {
    path: '/settings',
    svgPath:
      'm370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z',
    ariaLabel: 'Settings',
  },
];

const getNavItemsForPage = (path: PageOption = '/'): NavItem[] => {
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
        (item) => item.path !== '/' && item.path !== '/practice'
      );
  }
};

export const Menu = () => {
  const location = useLocation();

  const [displayedNavItems, setDisplayedNavItems] = useState(
    getNavItemsForPage(location.pathname as PageOption)
  );

  useEffect(() => {
    setDisplayedNavItems(getNavItemsForPage(location.pathname as PageOption));
  }, [location]);

  return (
    <div className="absolute bottom-2 left-0 right-0 w-full px-8 py-6">
      <nav className="w-full">
        <ul className="flex justify-between gap-4 font-bold text-violet-700">
          {displayedNavItems.map((navItem) => (
            <li
              className="rounded-full bg-gradient-to-b from-violet-200 to-violet-400 p-2"
              key={navItem.path}
            >
              <NavLink to={navItem.path} aria-label={navItem.ariaLabel}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                >
                  <path d={navItem.svgPath} />
                </svg>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
