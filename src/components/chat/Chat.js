import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { RoomsList, ChatField } from '@components';

import styles from './chat.module.scss';

export function Chat() {
    const { path } = useRouteMatch();

    return (
        <div className={styles.chat}>
            <Switch>
                <Route path={[`${path}/:roomId`, path]}>
                    <RoomsList chatsPath={path}/>
                    <Route path={`${path}/:roomId`}>
                        <ChatField />
                    </Route>
                    <Route exact path={path}>
                        <h1>Выберите диалог</h1>
                    </Route>
                </Route>
            </Switch>
        </div>
    );
}
