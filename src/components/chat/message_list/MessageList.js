import React from 'react';
import styles from './MessageList.module.scss';

import { Message }from '@components/chat/message_list/message/Message';

export function MessageList({ list }) {
    if (list.length) {
        return (
            <ul
                className={styles.messageList}
            >
                {list.map((item, index) => {
                    return (
                        <Message
                            message={item}
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
    list: PropTypes.array,
};
