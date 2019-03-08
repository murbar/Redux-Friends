import auth from '../services/authService';

const initialState = {
  isLoggedIn: !!auth.getCurrentUser() || false,
  isLoggingIn: false,
  friends: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// login start
// login success
// login failure
