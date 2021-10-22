import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import styles from './AppRouter.module.scss';

import { Chat, Greeting, Header, Profile } from '@components';

import { APP, USER } from '@constants/constants';

export function AppRouter() {
    return (
        <BrowserRouter>
            <Header app={APP}/>
            <main className={styles.main}>
                <Switch>
                    <Route exact path={'/'}>
                        <Greeting user={USER}/>
                    </Route>
                    <Route path={'/chats'}>
                        <Chat />
                    </Route>
                    <Route path={'/profile'}>
                        <Profile />
                    </Route>
                    <Route path={'*'}>
                        <h1>Упс :-( Такая страница не найдена</h1>
                        <h2>404</h2>
                        <Link to="/">go to Home Page</Link>
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}