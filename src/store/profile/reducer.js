import { USER } from '@constants/constants';
import { SET_NAME, SET_EMAIL, TOGGLE_NAME_VISIBILITY, SET_PROFILE } from './types';

const initialProfileState = {
    name: USER.name,
    email: 'example@email.com',
    isNameVisible: true,
};

export const ProfileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.name,
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.email,
            };
        case TOGGLE_NAME_VISIBILITY:
            return {
                ...state,
                isNameVisible: !state.isNameVisible,
            };
        case SET_PROFILE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
