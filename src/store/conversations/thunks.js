import { setMessagesByRoomID } from '@store/conversations/actions';
import { BOT_MESSAGE_LIST } from '@constants/constants';
import { clearBotTimerId, setBotTimerId } from '@store/chats';
import { getMessagesByRoomIdApi, sendMessageApi, subscribeToMessagesList } from '@api/database';
import { nanoid } from 'nanoid';

const getRandomBotMessage = () => {
    const randomMessageListIndex = Math.floor(Math.random() * BOT_MESSAGE_LIST.length);
    return BOT_MESSAGE_LIST[randomMessageListIndex];
};

export const requestMessagesByRoomId = roomId => async (dispatch, getState) => {
    const { user } = getState().auth;
    const response = await getMessagesByRoomIdApi(user.uid, roomId);
    if (response) {
        const messagesList = Object.keys(response).map(key => response[key]);
        dispatch(setMessagesByRoomID(roomId, messagesList));
    }
    subscribeToMessagesList(user.uid, roomId, (roomId, messages) => dispatch(setMessagesByRoomID(roomId, messages)));
};


export const sendNewMessage = (roomId, author) => async (dispatch, getState) => {
    const { companion, inputValue, botTimerId = null } = getState().chats[roomId];
    const { user } = getState().auth;

    if (botTimerId) {
        clearTimeout(botTimerId);
        dispatch(clearBotTimerId(roomId));
    }

    const message = {
        author,
        id: nanoid(),
        text: inputValue,
    };

    await sendMessageApi(user.uid, roomId, message);

    if (author === user.displayName) {
        const message = {
            author: companion,
            id: nanoid(),
            text: getRandomBotMessage(),
        };
        const timerId = setTimeout(() => sendMessageApi(user.uid, roomId, message), 1500);
        dispatch(setBotTimerId(roomId, timerId));
    }
};
