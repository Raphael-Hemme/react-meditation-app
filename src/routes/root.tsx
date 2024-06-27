import { Outlet } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { useReducer } from 'react';

type AppState = {
  settings: {
    selectedDuration: number;
  };
  statistics: {
    sessions: any[];
  };
};

const initialState = {
  settings: {
    selectedDuration: 300,
  },
  statistics: {
    sessions: [],
  },
};

const ACTIONS = {
  SELECT_DURATION: 'select-duration',
};

const reducer = (state: AppState, action): AppState => {
  /*   switch (action.type) {
    case ACTIONS.SELECT_DURATION:
      return {
        ...state,
        settings.selectedDuration = action.payload
      }
  } */
};

export const Root = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="h-full min-h-screen w-screen bg-gradient-to-b from-green-100 to-blue-200 px-10 py-4">
      <main className="h-full min-h-full w-full">
        <Outlet />
      </main>
      <Menu />
    </div>
  );
};
