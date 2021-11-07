import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function ProtectedRoute({ isAuth, to = '/', ...rest }) {
    return isAuth ? <Route {...rest} /> : <Redirect to={to} />;
}

ProtectedRoute.propTypes = {
    isAuth: PropTypes.bool,
    to: PropTypes.string,
};
