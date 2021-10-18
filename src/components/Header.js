import React from 'react';
import styles from '@components/Header.module.scss';

export  function Header({ app }) {
    return (
        <div className={styles.header}>
            <h3 className={styles.header__title}>{ app.name }</h3>
        </div>
    );
}
Header.propTypes = {
    app: PropTypes.object,
};
