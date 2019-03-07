import axios from 'axios';

// setup defaults for error handling here

function setToken(token) {
  axios.defaults.headers.common['Authorization'] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken
};
