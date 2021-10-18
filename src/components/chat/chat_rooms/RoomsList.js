import React, { useState } from 'react';

import { Room } from '@components/chat/chat_rooms/room/Room';

import styles from './RoomsList.module.scss';

export function RoomsList({ list }) {
    const [selectedRoom, setSelectedRoom] = useState(0);

    return (
        <ul className={styles.roomsList}>
            {list.map((room, index) => {
                return (
                    <Room
                        key={room.id}
                        name={room.name}
                        selected={selectedRoom === index}
                        clickItemHandler={() => setSelectedRoom(index)}
                    />
                );
            })}
        </ul>
    );
}

RoomsList.propTypes = {
    list: PropTypes.array,
};
