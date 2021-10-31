import React from 'react';
import styles from './MessageList.module.scss';

import { Message }from '@components/chat/chat_field/message_list/message/Message';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getMessagesByRoomId } from '@store/conversations';

export function MessageList() {
    const { roomId } = useParams();
    const messages = useSelector(getMessagesByRoomId(roomId));

    if (messages.length) {
        return (
            <ul
                className={styles.messageList}
            >
                {messages.map(message => {
                    return (
                        <Message
                            message={message}
                            key={message.id}/>
                    );
                })}
            </ul>
        );
    }
    return (
        <h3 className={styles.messageList}>У вас пока нет сообщений. Напишите что-нибудь</h3>
    );


}
