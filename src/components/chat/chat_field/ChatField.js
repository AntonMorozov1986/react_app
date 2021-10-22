import React, {  useEffect   } from 'react';
import { useParams,  useHistory } from 'react-router-dom';
import { MessageList, MessageInput } from '@components';
import { Divider } from '@mui/material';
import styles from './ChatField.module.scss';

export function ChatField({ roomsList, sendMessage = f => f, botAnswer = f => f }) {
    const { roomId } = useParams();
    const { push } = useHistory();
    const selectedRoom = roomsList[roomId];
    const messagesList = selectedRoom?.messages ?? [];

    useEffect(() => {
        if (!roomsList[roomId]) {
            push('/chats');
        }

        const timeoutId = botAnswer(roomId, selectedRoom, messagesList);

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
    botAnswer: PropTypes.func,
};
