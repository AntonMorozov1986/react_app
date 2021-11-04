import { addNewConversation } from '@store/conversations';
import { addNewRoom } from '@store/chats';

import { nanoid } from 'nanoid';

export const createNewRoom = () => dispatch => {
    const newCompanionName = prompt('Введите имя нового собеседника');
    if (!newCompanionName) {
        alert('Вы не ввели имя');
        return;
    }
    const roomId = nanoid();
    dispatch(addNewRoom(newCompanionName, roomId));
    dispatch(addNewConversation(roomId));
};
