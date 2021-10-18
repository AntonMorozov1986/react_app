import React from 'react';

import styles from'./Greeting.module.scss';

export function Greeting({ user }) {
    return <h3 className={styles.greeting}>{ user.name }, Добро пожаловать в ChatiX</h3>;
}
Greeting.propTypes = {
    user: PropTypes.object,
};
