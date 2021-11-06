import React, { useMemo } from 'react';

import { Room } from '@components/chat/chat_rooms/room/Room';

import styles from './RoomsList.module.scss';
import { Link, useParams } from 'react-router-dom';

import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createNewRoom, getChatsList } from '@store/chats';

export function RoomsList({ chatsPath }) {
    const dispatch = useDispatch();
    const { roomId } = useParams();
    const roomsList = useSelector(getChatsList);

    const roomsListMemo = useMemo(() => {
        return Object.keys(roomsList).map(roomKey => {
            return (
                <Link
                    className={styles.RoomsList__link}
                    key={roomKey}
                    to={`${chatsPath}/${roomKey}`}>
                    <Room
                        author={roomsList[roomKey].companion}
                        selected={roomKey === roomId}
                    />
                </Link>
            );
        });
    }, [roomsList, roomId, chatsPath]);

    return (
        <ul className={styles.RoomsList}>
            <Button
                sx={{ mb: '12px' }}
                variant="contained"
                color="secondary"
                onClick={() => dispatch(createNewRoom())}
            >Новый чат</Button>
            {roomsListMemo}
        </ul>
    );
}

RoomsList.propTypes = {
    chatsPath: PropTypes.string,
};
