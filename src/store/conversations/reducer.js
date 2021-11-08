import {
    SET_MESSAGES_LIST_BY_ROOM_ID,
    CLEAR_CONVERSATIONS_LIST
} from './types';

const initialConversationsListState = {};

export const ConversationsReducer = (state = initialConversationsListState, action) => {
    switch (action.type) {
        case SET_MESSAGES_LIST_BY_ROOM_ID:
            return {
                ...state,
                [action.payload.roomId]: action.payload.messages,
            };
        case CLEAR_CONVERSATIONS_LIST:
            return {};
        default:
            return state;
    }
};
