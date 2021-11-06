import { addNewMessage } from '@store/conversations/actions';
import { BOT_MESSAGE_LIST } from '@constants/constants';
import { clearBotTimerId, setBotTimerId } from '@store/chats';

const getRandomBotMessage = () => {
    const randomMessageListIndex = Math.floor(Math.random() * BOT_MESSAGE_LIST.length);
    return BOT_MESSAGE_LIST[randomMessageListIndex];
};

export const sendNewMessage = (roomId, author) => (dispatch, getState) => {
    const { companion, inputValue, botTimerId } = getState().chats[roomId];
    const { user } = getState().auth;

    if (botTimerId) {
        clearTimeout(botTimerId);
        dispatch(clearBotTimerId(roomId));
    }

    dispatch(addNewMessage(roomId, author, inputValue));

    if (author === user.displayName) {
        const timerId = dispatch(addNewMessage(roomId, companion, getRandomBotMessage(), 1500));
        dispatch(setBotTimerId(roomId, timerId));
    }
};
