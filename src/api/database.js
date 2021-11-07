import { ref, push, get, child, update, onValue } from 'firebase/database';
import { firebaseDatabase } from '@api/firebase';

export const getMessagesByRoomIdApi = async (userId, roomId) => {
    const messagesListRef = child(ref(firebaseDatabase), `ConversationsList/${userId}/${roomId}/messages`);
    const snapshot = await get(messagesListRef);
    return snapshot.val();
};

export const sendMessageApi = async (userId, roomId, message) => {
    const messagesRef = child(ref(firebaseDatabase), `ConversationsList/${userId}/${roomId}/messages`);
    await push(messagesRef, message);
};

export const subscribeToMessagesList = (userId, roomId, storeUpdater) => {
    const chatsListRef = child(ref(firebaseDatabase), `ConversationsList/${userId}/${roomId}/messages`);
    onValue(chatsListRef, snapshot => {
        const responseData = snapshot.val();
        if (responseData) {
            const messagesList = Object.keys(responseData).map(key => responseData[key]);
            storeUpdater(roomId, messagesList);
        }
    });
};

export const getChatsListApi = async userId => {
    const chatsListRef = child(ref(firebaseDatabase), `ChatsList/${userId}`);
    const snapshot = await get(chatsListRef);
    return snapshot.val();
};

export const addNewRoomApi = async (userId, roomId, companion) => {
    const chatRoomsRef = child(ref(firebaseDatabase), `ChatsList/${userId}/${roomId}`);
    await update(chatRoomsRef, { companion });
};

export const subscribeToChatsList = (userId, storeUpdater) => {
    const chatsListRef = child(ref(firebaseDatabase), `ChatsList/${userId}`);
    onValue(chatsListRef, snapshot => {
        storeUpdater(snapshot.val());
    });
};
