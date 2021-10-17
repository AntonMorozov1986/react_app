import React, { useState, useRef } from 'react';
import '@style/components/MessageInput.scss';

import { USER } from '@global/constants/constants';

import { FaRegPaperPlane } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export function MessageInput({ sendMessage }) {
    const inputEl = useRef(null);
    const [message, setMessage] = useState({ author: '', text: '' });
    const changeHandler = evt => setMessage({ author: USER.name, text: evt.target.value });
    const sendMessageHandler = evt => {
        if (evt.type === 'keydown' && evt.key !== 'Enter') {
            return;
        }
        sendMessage(message);
        setMessage({ author: '', text: '' });
        inputEl.current.value = '';
    };

    return (
        <label className={'MessageInput'}>
            <input
                className={'text-input'}
                type="text"
                placeholder={'Напишите сообщение...'}
                ref={inputEl}
                onChange={changeHandler}
                onKeyDown={sendMessageHandler}
            />
            <button
                className={'send-btn'}
                onClick={sendMessageHandler}
            >
                <IconContext.Provider value={{ className: 'send-btn-ico' }}>
                    <FaRegPaperPlane />
                </IconContext.Provider>
            </button>
        </label>
    );
}

MessageInput.propTypes = {
    sendMessage: PropTypes.func,
};
