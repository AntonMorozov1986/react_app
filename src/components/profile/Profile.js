import React from 'react';
import { USER } from '@constants/constants';

export function Profile() {
    return (
        <>
            <h1>Ваш профиль</h1>
            <h3>{`Ваше имя ${USER.name}`}</h3>
        </>
    );
}
