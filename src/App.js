import React from 'react';
import styles from './App.module.scss';

import { store } from './store/create_store';
import { Provider } from 'react-redux';
import { AppRouter } from './router';

export function App() {
    return (
        <div className={styles.App}>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
    );
}

