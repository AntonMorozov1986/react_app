export const getChatsList = state => {
    return state.chatsList;
};

export const getChatRoomById = id => state => {
    return state.chatsList[id] ?? {};
};
