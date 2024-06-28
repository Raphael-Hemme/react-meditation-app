import React from 'react';
import { createContext } from 'react';

export type AppState = {
  settings: {
    selectedDuration: number;
  };
  statistics: {
    sessions: any[];
  };
};

export const ACTIONS = {
  SELECT_DURATION: 'select-duration',
  SAVE_COMPLETED_SESSION: 'save-completed-session',
  SAVE_INTERRUPTED_SESSION: 'save-interrupted-session',
};

export const getInitialState = (): AppState => {
  return {
    settings: {
      selectedDuration: 300,
    },
    statistics: {
      sessions: [],
    },
  };
};

export const appStateReducer = (
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

export const AppStateContext = createContext<
  | {
      state: AppState;
      dispatch: React.Dispatch<any>;
    }
  | undefined
>(undefined);

export const useAppState = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
