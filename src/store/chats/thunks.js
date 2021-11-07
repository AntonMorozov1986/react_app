import { setChatsList } from '@store/chats';

import { nanoid } from 'nanoid';
import { addNewRoomApi, getChatsListApi } from '@api/database';

export const requestChatsList = () => async (dispatch, getState) => {
    const { uid: userId } = getState().auth.user;
    const chatsList = await getChatsListApi(userId);
    dispatch(setChatsList(chatsList));
};

export const createNewRoom = userId => async () => {
    const newCompanionName = prompt('Введите имя нового собеседника');
    if (!newCompanionName) {
        alert('Вы не ввели имя');
        return;
    }
    const roomId = nanoid();
    await addNewRoomApi(userId, roomId, newCompanionName);
};
