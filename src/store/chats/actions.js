import { ADD_NEW_ROOM, SEND_BOT_MESSAGE, SEND_NEW_MESSAGE, UPDATE_INPUT_VALUE } from '@store/chats/types';
import { nanoid } from 'nanoid';

export const addNewRoom = companionName => {
    const newRoom = {
        [nanoid()]: {
            companion: companionName,
            inputValue: '',
            messages: [],
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

export const sendNewMessage = (roomId, author) => {
    return {
        type: SEND_NEW_MESSAGE,
        payload: {
            roomId,
            author,
        },
    };
};

export const sendBotMessage = (roomId, companion) => {
    return {
        type: SEND_BOT_MESSAGE,
        payload: {
            roomId,
            author: companion,
        },
    };
};
