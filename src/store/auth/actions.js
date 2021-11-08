import {
    SET_USER,
    DELETE_USER
} from './types';

export const setUser = user => {
    return {
        type: SET_USER,
        payload: {
            user,
        },
    };
};

export const deleteUser = () => {
    return {
        type: DELETE_USER,
    };
};
