import React, { useEffect, useMemo } from 'react';
import { useParams,  useHistory } from 'react-router-dom';
import { MessageList, MessageInput } from '@components';
import { Divider } from '@mui/material';
import styles from './ChatField.module.scss';

export function ChatField({ roomsList, sendMessage = f => f, botAnswer = f => f }) {
    const { roomId } = useParams();
    const { push } = useHistory();
    const messagesList = useMemo(() => {
        return roomsList[roomId]?.messages ?? [];
    }, [roomsList, roomId]);

    useEffect(() => {
        if (!roomsList[roomId]) {
            push('/chats');
        }

        const timeoutId = botAnswer(roomId, roomsList[roomId], messagesList);

        return () => clearTimeout(timeoutId);
    }, [roomsList, roomId, push, botAnswer, messagesList]);

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
