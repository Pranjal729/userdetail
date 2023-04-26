import { getUserDetails } from './api';

export const setUserDetails = (username, user) => ({
  type: 'SET_USER_DETAILS',
  payload: {
    username,
    user,
  },
});

export const fetchUserDetails = (username) => async (dispatch, getState) => {
  if (getState().user[username]) {
    return;
  }

  const user = await getUserDetails(username);
  dispatch(setUserDetails(username, user));
};
