import React, { useMemo } from 'react';
import styles from './MainMenu.module.scss';
import { MenuItem } from './menu_item';
import { PAGES } from '@configs/pages.config';
import { useSelector } from 'react-redux';
import { isAuth } from '@store/auth';

export  function MainMenu() {
    const isUserAuth = useSelector(isAuth);
    const preparedMenuList = useMemo(() => {
        return PAGES.filter(page => page.isProtected === isUserAuth);
    },[isUserAuth]);
    return (
        <nav className={styles.MainMenu}>
            <ul className={styles.list}>
                {preparedMenuList.map(menuItem => {
                    return <MenuItem key={menuItem.name} menuItem={menuItem} />;
                })}
            </ul>
        </nav>
    );
}
MainMenu.propTypes = {
    app: PropTypes.object,
};
