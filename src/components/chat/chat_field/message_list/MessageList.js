import React, { useEffect } from 'react';
import styles from './MessageList.module.scss';

import { Message }from '@components/chat/chat_field/message_list/message/Message';
import { useParams } from 'react-router-dom';
import { useParamsSelector } from '@store/store_utils';
import { getChatRoomById, sendBotMessage } from '@store/chats';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '@store/profile';

export function MessageList() {
    const dispatch = useDispatch();
    const { roomId } = useParams();
    const { messages = [], companion = null } = useParamsSelector(getChatRoomById,roomId) ?? {};
    const userName = useSelector(getProfile).name;

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        let timerId = null;

        if (lastMessage?.author === userName) {
            timerId = setTimeout(() => dispatch(sendBotMessage(roomId, companion)), 1500);
        }

        return () => clearTimeout(timerId);
    }, [messages, companion, roomId, dispatch, userName]);

    if (messages.length) {
        return (
            <ul
                className={styles.messageList}
            >
                {messages.map((message, index) => {
                    return (
                        <Message
                            message={message}
                            key={index}/>
                    );
                })}
            </ul>
        );
    }
    return (
        <h3 className={styles.messageList}>У вас пока нет сообщений. Напишите что-нибудь</h3>
    );


}

MessageList.propTypes = {
    messagesList: PropTypes.array,
};
