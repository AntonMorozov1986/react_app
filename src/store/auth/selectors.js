export const getUser = state => state.auth.user ?? {};
export const isAuth = state => !!state.auth.user;
