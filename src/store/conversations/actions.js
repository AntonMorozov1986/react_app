import { CLEAR_CONVERSATIONS_LIST, SET_MESSAGES_LIST_BY_ROOM_ID } from './types';

export const setMessagesByRoomID = (roomId, messages) => {
    return {
        type: SET_MESSAGES_LIST_BY_ROOM_ID,
        payload: {
            messages,
            roomId,
        },
    };
};

export const clearConversationsList = () => {
    return {
        type: CLEAR_CONVERSATIONS_LIST,
    };
};
