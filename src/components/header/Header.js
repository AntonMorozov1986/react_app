import React from 'react';
import styles from '@components/header/Header.module.scss';
import { MainMenu } from '@components';



export  function Header({ app }) {
    return (
        <header className={styles.pageHeader}>
            <h3 className={styles.pageHeader__title}>{ app.name }</h3>
            <MainMenu />
        </header>
    );
}
Header.propTypes = {
    app: PropTypes.object,
};
