import React, { useState } from 'react';
import { Box, Button, TextField, ListItemButton } from '@mui/material';
import { logIn, logUp } from '@store/auth';
import { useDispatch } from 'react-redux';
import styles from './auth.module.scss';
import { IconContext } from 'react-icons';
import { FaAt, FaUserEdit, FaKey } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export function Auth() {
    const dispatch = useDispatch();
    const { push } = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authType, setAuthType] = useState('login');

    const submitHandler = async () => {
        if (isFormValid()) {
            try {
                await submitForm();
                push('/chats');
            } catch (err) {
                alert(err.message);
            }
        }
    };

    const isFormValid = () => {
        if (authType === 'login') {
            return !!email && !!password;
        }
        return !!email && !!password && !!name;
    };

    const submitForm =() => {
        if (authType === 'login') {
            dispatch(logIn(email, password));
        } else {
            dispatch(logUp(email, password, name));
        }
    };

    return (
        <>
            <h1>Auth Page</h1>
            <div className={styles.AuthTypeButtons}>
                <ListItemButton
                    sx={{
                        '&.Mui-selected': {
                            backgroundColor: '#2196f3',
                        },
                    }}
                    selected={authType === 'login'}
                    onClick={() => setAuthType('login')}
                >
                    Вход
                </ListItemButton>
                <ListItemButton
                    sx={{
                        '&.Mui-selected': {
                            backgroundColor: '#2196f3',
                        },
                    }}
                    selected={authType === 'signUp'}
                    onClick={() => setAuthType('signUp')}
                >
                    Регистрация
                </ListItemButton>
            </div>
            <form
                className={styles.AuthForm}
                onSubmit={submitHandler}
            >

                { authType === 'login' ?
                    null :
                    <Box
                        className={styles.input}
                        sx={{ display: authType === 'signUp' ? 'flex' : 'none' }}
                    >
                        <IconContext.Provider value={{ className: styles.input__ico }}>
                            <FaUserEdit />
                        </IconContext.Provider>
                        <TextField
                            className={styles.input__text}
                            label="Имя"
                            variant="standard"
                            value={name}
                            onChange={evt => setName(evt.target.value)}
                        />
                    </Box>
                }

                <Box
                    className={styles.input}
                >
                    <IconContext.Provider value={{ className: styles.input__ico }}>
                        <FaAt />
                    </IconContext.Provider>
                    <TextField
                        className={styles.input__text}
                        label="Email"
                        variant="standard"
                        value={email}
                        onChange={evt => setEmail(evt.target.value)}
                    />
                </Box>

                <Box
                    className={styles.input}
                >
                    <IconContext.Provider value={{ className: styles.input__ico }}>
                        <FaKey />
                    </IconContext.Provider>
                    <TextField
                        className={styles.input__text}
                        label="Пароль"
                        variant="standard"
                        value={password}
                        onChange={evt => setPassword(evt.target.value)}
                    />
                </Box>
            </form >
            <Button
                variant={'contained'}
                onClick={submitHandler}
            >
                {authType === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </Button>
        </>
    );
}
