import React, { useRef, useState } from 'react';

import { USER } from '@constants/constants';

import { FormControl, Input, InputLabel, InputAdornment } from '@mui/material';
import { FaRegPaperPlane } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const styles = {
    margin: '0.5em 0 0 0',
    width: '100%',
};

export function MessageInput({ sendMessage = f => f }) {
    const { roomId } = useParams();
    const inputEl = useRef(null);

    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState({ author: '', text: '' });

    const changeHandler = evt => {
        setInputValue(evt.target.value);
        setMessage({ author: USER.name, text: evt.target.value });
    };
    const sendMessageHandler = evt => {
        if (!inputValue) return;

        if (evt.type === 'keydown' && evt.key !== 'Enter') {
            return;
        }
        sendMessage(roomId, message);
        setMessage({ author: '', text: '' });
        setInputValue('');
        inputEl.current.focus();
    };

    return (

        <FormControl
            sx={styles}
            variant="standard"
        >
            <InputLabel htmlFor="standard-adornment-password">Введите сообщение...</InputLabel>
            <Input
                value={inputValue}
                autoFocus
                onChange={changeHandler}
                onKeyDown={sendMessageHandler}
                inputRef={inputEl}
                endAdornment={
                    <InputAdornment position="end">
                        <FaRegPaperPlane
                            style={{ cursor: 'pointer' }}
                            onClick={sendMessageHandler}
                        />
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}

MessageInput.propTypes = {
    sendMessage: PropTypes.func,
};
