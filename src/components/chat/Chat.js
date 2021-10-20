import React, { useCallback, useState } from 'react';
import { CHATS_LIST } from '@constants/constants';
import { Switch, Route } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { RoomsList, ChatField } from '@components';

import styles from './chat.module.scss';
import { PAGES } from '@configs/pages.config';

const PAGE_CONFIG = PAGES.find(menuItem => menuItem.name === 'chats_page');

export function Chat() {
    const [roomsList, setRoomsList] = useState(CHATS_LIST);

    const sendMessage = useCallback((roomId, message) => {
        setRoomsList({
            ...roomsList,
            [roomId]: {
                ...roomsList[roomId],
                messages: [...roomsList[roomId].messages, message],
            },
        });
    },[roomsList]);

    const addChatRoom = () => {
        const companion = prompt('Введите имя собеседника');
        setRoomsList({
            ...roomsList,
            [nanoid()]: { companion, messages: [] },
        });
    };

    return (
        <div className={styles.chat}>
            <Switch>
                <Route path={[`${PAGE_CONFIG.url}/:roomId`, PAGE_CONFIG.url]}>
                    <RoomsList roomsList={roomsList} addChatRoom={addChatRoom}/>
                    <Route path={`${PAGE_CONFIG.url}/:roomId`}>
                        <ChatField roomsList={roomsList} sendMessage={sendMessage}/>
                    </Route>
                    <Route exact path={PAGE_CONFIG.url}>
                        <h1>Выберите диалог</h1>
                    </Route>
                </Route>
            </Switch>
        </div>
    );
}
