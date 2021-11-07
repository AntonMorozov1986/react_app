import {
    CLEAR_BOT_TIMER_ID,
    SET_BOT_TIMER_ID,
    SET_CHATS_LIST,
    UPDATE_INPUT_VALUE,
    CLEAR_CHATS_LIST
} from './types';

export const updateInputValue = (roomId, value) => {
    return {
        type: UPDATE_INPUT_VALUE,
        payload: {
            roomId,
            value,
        },
    };
};

export const setBotTimerId = (roomId, botTimerId) => {
    return {
        type: SET_BOT_TIMER_ID,
        payload: {
            roomId,
            botTimerId,
        },
    };
};

export const clearBotTimerId = roomId => {
    return {
        type: CLEAR_BOT_TIMER_ID,
        payload: {
            roomId,
        },
    };
};

export const setChatsList = chatsList => {
    return {
        type: SET_CHATS_LIST,
        payload: {
            ...chatsList,
        },
    };
};

export const clearChatsList = () => {
    return {
        type: CLEAR_CHATS_LIST,
    };
};
