import React, { useMemo } from 'react';

import { Room } from '@components/chat/chat_rooms/room/Room';

import styles from './RoomsList.module.scss';
import { Link, useParams } from 'react-router-dom';

import { PAGES } from '@configs/pages.config';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addNewRoom, getChatsList } from '@store/chats';
const CHAT_PAGE_CONFIG = PAGES.find(menuItem => menuItem.name === 'chats_page');

export function RoomsList() {
    const dispatch = useDispatch();
    const { roomId } = useParams();
    const roomsList = useSelector(getChatsList);

    const addChatRoom = () => {
        const companionName = prompt('Введите имя нового собеседника');
        dispatch(addNewRoom(companionName));
    };

    const roomsListMemo = useMemo(() => {
        return Object.keys(roomsList).map(roomKey => {
            return (
                <Link
                    className={styles.RoomsList__link}
                    key={roomKey}
                    to={`${CHAT_PAGE_CONFIG.url}/${roomKey}`}>
                    <Room
                        author={roomsList[roomKey].companion}
                        selected={roomKey === roomId}
                    />
                </Link>
            );
        });
    }, [roomsList, roomId]);

    return (
        <ul className={styles.RoomsList}>
            <Button
                sx={{ mb: '12px' }}
                variant="contained"
                color="secondary"
                onClick={addChatRoom}
            >Новый чат</Button>
            {roomsListMemo}
        </ul>
    );
}

