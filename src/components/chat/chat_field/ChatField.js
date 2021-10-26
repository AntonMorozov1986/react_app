import React, { useEffect } from 'react';
import { useParams,  useHistory } from 'react-router-dom';
import { MessageList, MessageInput } from '@components';
import { Divider } from '@mui/material';
import styles from './ChatField.module.scss';
import { getChatRoomById } from '@store/chats';
import { useParamsSelector } from '@store/store_utils';

export function ChatField() {
    const { roomId } = useParams();
    const { push } = useHistory();
    const chatRoom = useParamsSelector(getChatRoomById, roomId);

    useEffect(() => {
        if (!chatRoom) {
            push('/chats');
        }
    }, [chatRoom, roomId, push]);

    return (
        <div className={styles.ChatField}>
            <MessageList />
            <Divider />
            <MessageInput />
        </div>
    );
}
