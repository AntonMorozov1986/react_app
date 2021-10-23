import React from 'react';

import styles from './Greeting.module.scss';

import { useSelector } from 'react-redux';

export function Greeting() {
    const { name } = useSelector(state => state.profile);

    return <h3 className={styles.greeting}>{ name }, Добро пожаловать в ChatiX</h3>;
}
