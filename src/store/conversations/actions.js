import { ADD_NEW_CONVERSATION, ADD_NEW_MESSAGE } from './types';

export const addNewConversation = roomId => {
    return {
        type: ADD_NEW_CONVERSATION,
        payload: roomId,
    };
};

export const addNewMessage = (roomId, author, text, delay) => {
    return {
        type: ADD_NEW_MESSAGE,
        payload: {
            roomId,
            author,
            text,
        },
        meta: {
            delay,
        },
    };
};
