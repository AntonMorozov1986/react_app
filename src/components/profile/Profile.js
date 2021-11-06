import React from 'react';

import styles from './profile.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { Button, Input, InputAdornment } from '@mui/material';
import { FaUserEdit, FaAt } from 'react-icons/fa';

import { getUser, logOut } from '@store/auth';
import { useHistory } from 'react-router-dom';

export function Profile() {
    const dispatch = useDispatch();
    const { push } = useHistory();
    const { displayName = '', email = '' } = useSelector(getUser);

    const logOutHandler = async () => {
        try {
            await dispatch(logOut());
            push('/');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <>
            <h1>Ваш профиль</h1>
            <h3>{displayName}</h3>
            <h3>Здесь Вы можете отредактировать свой профиль</h3>
            <form
                className={styles.Profile}
                action="#"
            >
                <label
                    className={styles.label}
                    htmlFor="user-name"
                >
                    Имя
                    <Input
                        className={styles.input}
                        id={'user-name'}
                        startAdornment={
                            <InputAdornment position="start">
                                <FaUserEdit/>
                            </InputAdornment>
                        }
                        value={displayName}
                        disabled
                    />
                </label>
                <label
                    className={styles.label}
                    htmlFor="user-email"
                >
                    Email
                    <Input
                        className={styles.input}
                        id={'user-email'}
                        startAdornment={
                            <InputAdornment position="start">
                                <FaAt/>
                            </InputAdornment>
                        }
                        value={email}
                        disabled
                    />
                </label>
                <Button
                    variant={'contained'}
                    onClick={logOutHandler}
                >
                    Выйти
                </Button>
            </form >
        </>
    );
}
