import React from 'react';

import { List } from '@mui/material';

import { Message }from '@components/chat/message_list/message/Message';

const styles = {
    width: '100%',
};

export function MessageList({ list }) {
    if (list.length) {
        return (
            <List className="MessageList"
                sx={styles}
            >
                {list.map((item, index) => {
                    return (
                        <Message message={item} key={index}/>
                    );
                })}
            </List>
        );
    }
    return (
        <h3>У вас пока нет сообщений. Напишите что-нибудь</h3>
    );


}

MessageList.propTypes = {
    list: PropTypes.array,
};
