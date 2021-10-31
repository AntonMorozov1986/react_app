export const getMessagesByRoomId = id => state => {
    return state.conversations[id] ?? [];
};
