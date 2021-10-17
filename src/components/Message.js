import React from 'react';
import '@style/components/Message.scss';

export function Message({ message }) {
    return (
        <li className="Message">
            <span>{message.author}: </span> {message.text}
        </li>
    );
}
Message.propTypes = {
    message: PropTypes.object,
};
