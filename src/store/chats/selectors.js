export const getChatsList = state => {
    return state.chats;
};

export const getChatRoomById = id => state => {
    return state.chats[id] ?? {};
};
