import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

/* STATE */
export const GithubProvider = ({ children }) => {
  /* --> Reducer <-- */
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  /* --> Reducer <-- */
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
