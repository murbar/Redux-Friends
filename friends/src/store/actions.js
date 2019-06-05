import auth from '../services/authService';
import { getFriends } from '../services/friendService';

export const LOGIN = 'LOGIN';

export const login = credentials => async dispatch => {
  dispatch({ type: LOGIN });
  await auth.login(credentials);
};

// login start
// login success
// login failure
// on success fetch friends and add to state
