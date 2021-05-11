const getIsAuthenticated = (state) => state.auth.isAuthenticated;

const getUsername = (state) => state.auth.user.name;

// eslint-disable-next-line
export default {
  getIsAuthenticated,
  getUsername,
};
