import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './Message.module.scss';

import { ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { getUser } from '@store/auth';

export function Message({ message }) {
    const { author, text } = message;
    const user = useSelector(getUser);
    const messageEl = useRef(null);
    useEffect(() => {
        messageEl.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    },[message]);

    return (
        <li
            ref={messageEl}
            className={classNames(styles.message, {
                [styles.userMessage]: author === user.displayName,
            })}
        >
            <ListItemText
                primary={author}
                secondary={text}
            />
        </li>
    );
}
Message.propTypes = {
    message: PropTypes.object,
};
