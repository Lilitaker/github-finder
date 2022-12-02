import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
//const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  /* --> useState <-- */
  /* const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); */

  /* --> Reducer <-- */
  const initialState = {
    users: [],
    loading: false,
  };

  /* --> Reducer <-- */
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get search results
  const searchUsers = async (text) => {
    /* Set the loading to true before make the request / it's get back to false in the Github Reducer */
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    /* The token was giving an error */
    const response = await fetch(
      `${GITHUB_URL}/search/users?${params}` /*  {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`, 
      },
    } */
    );

    const { items } = await response.json();

    /* --> useState <-- */
    /* setUsers(data);
    setLoading(false); */

    /* --> Reducer <-- */
    dispatch({
      type: 'GET_USERS', //All uppercase
      payload: items, //Data we get from the API
    });
  };

  // Clear users from state
  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  // Set loading
  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING', //All uppercase
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
      /*useState --> value={{users, loading, fetchUsers}} */
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
