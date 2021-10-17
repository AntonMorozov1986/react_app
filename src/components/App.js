import React from 'react';
import styles from '@components/App.module.scss';

import { USER, APP } from '@constants/constants';

import { Header } from '@components/Header';
import { Greeting } from '@components/Greeting';
import { Chat } from '@components/chat/Chat';

export function App() {
    return (
        <div className={styles.App}>
            <Header app={APP}/>
            <Greeting user={USER}/>
            <Chat />
        </div>
    );
}

