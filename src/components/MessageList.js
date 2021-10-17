import React from 'react';
import '@style/components/MesasgeList.scss';

import { Message }from '@components/Message';

export function MessageList({ list }) {
    return (
        <ul className="MessageList">
            {list.map((item, index) => {
                return (
                    <Message message={item} key={index}/>
                );
            })}
        </ul>
    );
}

MessageList.propTypes = {
    list: PropTypes.array,
};
