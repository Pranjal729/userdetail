const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DETAILS':
      return {
        ...state,
        [action.payload.username]: action.payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;
