import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { PAGES } from '@configs/pages.config';

import styles from './AppRouter.module.scss';

import { Header } from '@components';

import { APP } from '@constants/constants';
import { useDispatch } from 'react-redux';
import { checkAuth } from '@store/auth';

export function AppRouter() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Header app={APP}/>
            <main className={styles.main}>
                <Switch>
                    {
                        PAGES.map(page => {
                            if (page.url === '/') {
                                return <Route exact path={'/'} component={page.component} key={page.name}/>;
                            }
                            return <Route path={page.url} component={page.component} key={page.name}/>;
                        })
                    }
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
