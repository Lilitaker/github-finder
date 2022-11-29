const githubReducer = (state, action) => {
  //Evaluate the action type
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state, //Bring all what it's in the state
        users: action.payload, //Fill the users array with the users from the API
        loading: false,
      };
    default:
      //If there isn't an action, we don't change the state. Return the current state
      return state;
  }
};

export default githubReducer;
