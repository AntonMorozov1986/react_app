import React from 'react';

import styles from './Greeting.module.scss';

import { useSelector } from 'react-redux';
import { getUser } from '@store/auth';

export function Greeting() {
    const { displayName } = useSelector(getUser);

    const greetingText = displayName ? `${displayName}, Добро пожаловать в ChatiX` : 'Добро пожаловать в ChatiX';

    return <h3 className={styles.greeting}>{ greetingText }</h3>;
}
