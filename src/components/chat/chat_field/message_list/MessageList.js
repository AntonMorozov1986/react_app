import React from 'react';
import styles from './MessageList.module.scss';

import { Message }from '@components/chat/chat_field/message_list/message/Message';

export function MessageList({ messagesList }) {

    if (messagesList.length) {
        return (
            <ul
                className={styles.messageList}
            >
                {messagesList.map((message, index) => {
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
