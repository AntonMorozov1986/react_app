import { BOT_MESSAGE_LIST, CHATS_LIST } from '@constants/constants';
import {
    SET_CHATS_LIST,
    ADD_NEW_ROOM,
    SEND_NEW_MESSAGE,
    UPDATE_INPUT_VALUE,
    SEND_BOT_MESSAGE
} from './types';

const getBotMessageText = () => {
    const randomMessageListIndex = Math.floor(Math.random() * BOT_MESSAGE_LIST.length);
    return BOT_MESSAGE_LIST[randomMessageListIndex];
};

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
        case SEND_NEW_MESSAGE:
            return {
                ...state,
                [action.payload.roomId]: {
                    ...state[action.payload.roomId],
                    messages: [
                        ...state[action.payload.roomId].messages,
                        {
                            author: action.payload.author,
                            text: state[action.payload.roomId].inputValue,
                        },
                    ],
                },
            };
        case SEND_BOT_MESSAGE:
            return {
                ...state,
                [action.payload.roomId]: {
                    ...state[action.payload.roomId],
                    messages: [
                        ...state[action.payload.roomId].messages,
                        {
                            author: action.payload.author,
                            text: getBotMessageText(),
                        },
                    ],
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
