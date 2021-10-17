import React, { useEffect, useState } from 'react';
import '@style/components/App.scss';

import { USER, APP, BOT_MESSAGE_LIST } from '@constants/constants';

import { Header } from '@components/Header';
import { Greeting } from '@components/Greeting';
import { MessageList } from '@components/MessageList';
import { MessageInput } from '@components/MessageInput';


export function App() {
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
        <div className="App">
            <Header app={APP}/>
            <Greeting user={USER}/>
            <MessageList list={messageList}/>
            <MessageInput sendMessage={message => setMessageList([...messageList, message])}/>
        </div>
    );

}

