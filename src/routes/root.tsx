import { Outlet } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { useReducer } from 'react';

const reducer = (state, action) => {};

export const Root = () => {
  const [appState, dispatch] = useReducer(reducer, {
    settings: {
      selectedDuration: '00:05:00',
    },
    statistics: {
      sessions: [],
    },
  });

  return (
    <div className="h-full min-h-screen w-screen bg-gradient-to-b from-green-100 to-blue-200 px-10 py-4">
      <main className="h-full min-h-full w-full">
        <Outlet />
      </main>
      <Menu />
    </div>
  );
};
