import React, {  useEffect   } from 'react';
import { useParams,  useHistory } from 'react-router-dom';
import { MessageList, MessageInput } from '@components';
import { Divider } from '@mui/material';
import styles from './ChatField.module.scss';
import { BOT_MESSAGE_LIST } from '@constants/constants';

export function ChatField({ roomsList, sendMessage = f => f }) {
    const { roomId } = useParams();
    const { push } = useHistory();
    const selectedRoom = roomsList[roomId];
    const messagesList = selectedRoom?.messages ?? [];

    useEffect(() => {
        if (!roomsList[roomId]) {
            push('/chats');
        }

        const lastMessage = messagesList[messagesList.length -1];
        let timeoutId = null;

        if (messagesList.length && lastMessage?.author !== selectedRoom.companion) {
            const getBotMessageText = () => {
                const randomMessageListIndex = Math.floor(Math.random() * BOT_MESSAGE_LIST.length);
                return BOT_MESSAGE_LIST[randomMessageListIndex];
            };
            timeoutId = setTimeout(() => (sendMessage(roomId, { author: selectedRoom.companion, text: getBotMessageText() })), 1500);
        }

        return () => clearTimeout(timeoutId);
    }, [messagesList, roomId]);

    return (
        <div className={styles.ChatField}>
            <MessageList messagesList={messagesList}/>
            <Divider />
            <MessageInput sendMessage={sendMessage}/>
        </div>
    );
}

ChatField.propTypes = {
    roomsList: PropTypes.object,
    sendMessage: PropTypes.func,
};
