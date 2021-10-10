import React from 'react';
import '@style/components/MesasgeList.scss';

import { Message }from '@components/Message';

export function MessageList({ list }) {
    const itemsList = list.map((item, index) => {
        return (
            <Message message={item} key={index}/>
        );
    });
    return (
        <ul className="MessageList">
            {itemsList}
        </ul>
    );
}

MessageList.propTypes = {
    list: PropTypes.array,
};
