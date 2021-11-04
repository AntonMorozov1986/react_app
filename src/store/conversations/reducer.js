import { CONVERSATIONS_LIST } from '@constants/constants';
import {
    SET_CONVERSATIONS_LIST,
    ADD_NEW_CONVERSATION,
    ADD_NEW_MESSAGE
} from './types';
import { nanoid } from 'nanoid';

const initialConversationsListState = CONVERSATIONS_LIST;

export const ConversationsReducer = (state = initialConversationsListState, action) => {
    switch (action.type) {
        case ADD_NEW_CONVERSATION:
            return {
                ...state,
                [action.payload]: [],
            };
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                [action.payload.roomId]: [
                    ...state[action.payload.roomId],
                    {
                        id: nanoid(),
                        author: action.payload.author,
                        text: action.payload.text,
                    },
                ],
            };
        case SET_CONVERSATIONS_LIST:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
