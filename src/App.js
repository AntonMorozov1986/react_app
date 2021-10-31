/* import node modules */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

/* import styles */
import styles from './App.module.scss';

/* import Redux */
import { persistedStore, store } from '@store/create_store';

/* import React Router */
import { AppRouter } from '@router';

export function App() {
    return (
        <div className={styles.App}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistedStore}>
                    <AppRouter />
                </PersistGate>
            </Provider>
        </div>
    );
}

