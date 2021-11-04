import {
    ADD_NEW_ROOM,
    CLEAR_BOT_TIMER_ID,
    SET_BOT_TIMER_ID,
    UPDATE_INPUT_VALUE
} from './types';

export const addNewRoom = (companionName, roomId) => {
    const newRoom = {
        [roomId]: {
            companion: companionName,
            inputValue: '',
        },
    };

    return {
        type: ADD_NEW_ROOM,
        payload: newRoom,
    };
};

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
