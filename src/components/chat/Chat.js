import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { RoomsList, ChatField } from '@components';

import styles from './chat.module.scss';
import { PAGES } from '@configs/pages.config';

const PAGE_CONFIG = PAGES.find(menuItem => menuItem.name === 'chats_page');

export function Chat() {

    return (
        <div className={styles.chat}>
            <Switch>
                <Route path={[`${PAGE_CONFIG.url}/:roomId`, PAGE_CONFIG.url]}>
                    <RoomsList />
                    <Route path={`${PAGE_CONFIG.url}/:roomId`}>
                        <ChatField />
                    </Route>
                    <Route exact path={PAGE_CONFIG.url}>
                        <h1>Выберите диалог</h1>
                    </Route>
                </Route>
            </Switch>
        </div>
    );
}
