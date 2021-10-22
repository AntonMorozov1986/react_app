import React from 'react';
import styles from './MenuItem.module.scss';
import { Link } from 'react-router-dom';

export  function MenuItem({ menuItem }) {
    return (
        <li className={styles.MenuItem}>
            <Link className={styles.link} to={menuItem.url}>{menuItem.title}</Link>
        </li>
    );
}
MenuItem.propTypes = {
    menuItem: PropTypes.object,
};
