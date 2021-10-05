import React from 'react';

export function Message({ user }) {
    return <h3>{ user.name }, Добро пожаловать в ChatiX</h3>;
}
Message.propTypes = {
    user: PropTypes.object,
};
