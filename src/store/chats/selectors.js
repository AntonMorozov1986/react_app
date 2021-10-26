import { createSelector } from 'reselect';

const getRoomId = (_,id) => id;

export const getChatsList = state => {
    return state.chatsList;
};

export const getChatRoomById = createSelector(
    getChatsList,
    getRoomId,
    (chatsList, roomId) => {
        return chatsList[roomId];
    }
);
