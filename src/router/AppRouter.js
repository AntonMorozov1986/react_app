import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { PAGES } from '@configs/pages.config';

import styles from './AppRouter.module.scss';

import { Header } from '@components';

import { APP } from '@constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, isAuth } from '@store/auth';
import { ProtectedRoute } from '@router/ProtectedRoute';

export function AppRouter() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    const isUserAuth = !!useSelector(isAuth);

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
                            if (page.isProtected) {
                                return <ProtectedRoute isAuth={isUserAuth} path={page.url} component={page.component} key={page.name} />;
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
