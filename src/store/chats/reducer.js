import {
    SET_CHATS_LIST,
    UPDATE_INPUT_VALUE,
    SET_BOT_TIMER_ID,
    CLEAR_BOT_TIMER_ID,
    CLEAR_CHATS_LIST
} from './types';

const initialChatsListState = {}; // CHATS_LIST;

export const ChatsReducer = (state = initialChatsListState, action) => {
    switch (action.type) {
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
        case CLEAR_CHATS_LIST:
            return {};
        default:
            return state;
    }
};
