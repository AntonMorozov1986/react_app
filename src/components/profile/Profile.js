import React from 'react';

import styles from './profile.module.scss';

import { useSelector, useDispatch } from 'react-redux';

import { Input, InputAdornment, Switch, FormControlLabel } from '@mui/material';
import { FaUserEdit, FaAt } from 'react-icons/fa';

import { toggleNameVisibility } from '../../store/profile';

export function Profile() {
    const dispatch = useDispatch();
    const { name, email, isNameVisible } = useSelector(state => state.profile);

    const changeNameVisibility = () => { dispatch(toggleNameVisibility());};

    return (
        <>
            <h1>Ваш профиль</h1>
            <h3>{isNameVisible ? name : 'Вы скрыли свое имя'}</h3>
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
                        value={name}
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
                <FormControlLabel
                    sx={{
                        display: 'block',
                        margin: '0',
                    }}
                    control={
                        <Switch />
                    }
                    label="Показать имя"
                    checked={isNameVisible}
                    onChange={changeNameVisibility}
                />
            </form >
        </>
    );
}
