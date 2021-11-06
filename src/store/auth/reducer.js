import {
    SET_USER,
    DELETE_USER
} from './types';

const initialAuthState = {
    user: {},
};

export const AuthReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload.user,
            };
        case DELETE_USER:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};
