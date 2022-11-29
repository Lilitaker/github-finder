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
    loading: true,
  };

  /* --> Reducer <-- */
  const [state, dispatch] = useReducer(githubReducer, initialState);

  /* The token was giving an error */
  const fetchUsers = async () => {
    const response = await fetch(
      `${GITHUB_URL}/users` /*  {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    } */
    );

    const data = await response.json();

    /* --> useState <-- */
    /* setUsers(data);
    setLoading(false); */

    /* --> Reducer <-- */
    dispatch({
      type: 'GET_USERS', //All uppercase
      payload: data, //Data we get from the API
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
      /*useState --> value={{users, loading, fetchUsers}} */
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
