import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './Message.module.scss';

import { ListItemText } from '@mui/material';

import { USER } from '@constants/constants';

export function Message({ message }) {
    const { author, text } = message;
    const messageEl = useRef(null);
    useEffect(() => {
        messageEl.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    },[message]);

    return (
        <li
            ref={messageEl}
            className={classNames(styles.message, {
                [styles.userMessage]: author === USER.name,
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
