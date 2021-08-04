const getAuthenticated = (state) => Boolean(state.auth.isAuthenticated);

const getUsername = (state) => state.auth.user.name;

export default {
  getAuthenticated,
  getUsername,
};
