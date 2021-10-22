import React from 'react';
import styles from './MainMenu.module.scss';
import { MenuItem } from './menu_item';
import { PAGES } from '@configs/pages.config';

export  function MainMenu() {
    return (
        <nav className={styles.MainMenu}>
            <ul className={styles.list}>
                {PAGES.map(menuItem => {
                    return <MenuItem key={menuItem.name} menuItem={menuItem} />;
                })}
            </ul>
        </nav>
    );
}
MainMenu.propTypes = {
    app: PropTypes.object,
};
