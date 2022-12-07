const githubReducer = (state, action) => {
  //Evaluate the action type
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state, //Bring all what it's in the state
        users: action.payload, //Fill the users array with the users from the API
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state, //Bring all what it's in the state
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    default:
      //If there isn't an action, we don't change the state. Return the current state
      return state;
  }
};

export default githubReducer;
