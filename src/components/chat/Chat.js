import React, { useEffect, useState } from 'react';
import { BOT_MESSAGE_LIST, CHATS_LIST } from '@constants/constants';
import { MessageList } from '@components/chat/message_list/MessageList';
import { MessageInput } from '@components/chat/message_input/MessageInput';
import { RoomsList } from '@components/chat/chat_rooms/RoomsList';

import { Divider } from '@mui/material';

import styles from './chat.module.scss';

export function Chat() {
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        const lastMessage = messageList[messageList.length -1];
        let timeoutId = null;

        if (messageList.length && lastMessage?.author !== 'ChatiXBot') {
            const getBotMessageText = () => {
                const randomMessageListIndex = Math.floor(Math.random() * BOT_MESSAGE_LIST.length);
                return BOT_MESSAGE_LIST[randomMessageListIndex];
            };
            timeoutId = setTimeout(() => (setMessageList([
                ...messageList, { author: 'ChatiXBot', text: getBotMessageText() },
            ])), 1500);
        }

        return () => clearTimeout(timeoutId);
    }, [messageList]);

    return (
        <div className={styles.chat}>
            <RoomsList list={CHATS_LIST} />
            <div className={styles.chat__messages}>
                <MessageList list={messageList}/>
                <Divider />
                <MessageInput sendMessage={message => setMessageList([...messageList, message])}/>
            </div>
        </div>
    );
}
