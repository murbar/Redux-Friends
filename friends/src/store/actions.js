import { getFriends } from '../services/friendService';
import auth from '../services/authService';

export const LOGIN = 'LOGIN';

export const login = credentials => async dispatch => {
  dispatch({ type: LOGIN });
  await auth.login(credentials);
};
