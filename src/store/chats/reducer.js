import { CHATS_LIST } from '@constants/constants';
import {
    SET_CHATS_LIST,
    ADD_NEW_ROOM,
    UPDATE_INPUT_VALUE,
    SET_BOT_TIMER_ID,
    CLEAR_BOT_TIMER_ID
} from './types';

const initialChatsListState = CHATS_LIST;

export const ChatsReducer = (state = initialChatsListState, action) => {
    switch (action.type) {
        case ADD_NEW_ROOM:
            return {
                ...state,
                ...action.payload,
            };
        case UPDATE_INPUT_VALUE:
            return {
                ...state,
                [action.payload.roomId]: {
                    ...state[action.payload.roomId],
                    inputValue: action.payload.value,
                },
            };
        case SET_BOT_TIMER_ID:
            return {
                ...state,
                [action.payload.roomId]: {
                    ...state[action.payload.roomId],
                    botTimerId: action.payload.botTimerId,
                },
            };
        case CLEAR_BOT_TIMER_ID:
            return {
                ...state,
                [action.payload.roomId]: {
                    ...state[action.payload.roomId],
                    botTimerCanceler: null,
                },
            };
        case SET_CHATS_LIST:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
