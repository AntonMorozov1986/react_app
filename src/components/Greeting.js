import React from 'react';

export function Greeting({ user }) {
    return <h3>{ user.name }, Добро пожаловать в ChatiX</h3>;
}
Greeting.propTypes = {
    user: PropTypes.object,
};
