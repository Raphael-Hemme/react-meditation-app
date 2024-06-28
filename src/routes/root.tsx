import { Outlet } from 'react-router-dom';
import { Menu } from '../components/Menu';
import React, { useReducer, createContext } from 'react';

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

export const ACTIONS = {
  SELECT_DURATION: 'select-duration',
};

const reducer = (
  state: AppState,
  action: { type: string; payload: any }
): AppState => {
  switch (action.type) {
    case ACTIONS.SELECT_DURATION:
      return {
        ...state,
        settings: {
          ...state.settings,
          selectedDuration: action.payload.selectedDuration,
        },
      };
    default:
      return state;
  }
};

const AppStateContext = createContext<
  | {
      state: AppState;
      dispatch: React.Dispatch<any>;
    }
  | undefined
>(undefined);

export const Root = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={{ state: appState, dispatch }}>
      <div className="h-full min-h-screen w-screen bg-gradient-to-b from-green-100 to-blue-200 px-10 py-4">
        <main className="h-full min-h-full w-full">
          <Outlet />
        </main>
        <Menu />
      </div>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
