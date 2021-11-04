import React, { useEffect, useRef } from 'react';


import { FormControl, Input, InputLabel, InputAdornment } from '@mui/material';
import { FaRegPaperPlane } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getChatRoomById, updateInputValue } from '@store/chats';
import { sendNewMessage } from '@store/conversations/thunks';
import { getProfile } from '@store/profile';

const styles = {
    margin: '0.5em 0 0 0',
    width: '100%',
};

export function MessageInput() {
    const dispatch = useDispatch();
    const { roomId } = useParams();
    const inputEl = useRef(null);
    const userName = useSelector(getProfile).name;
    const { inputValue } = useSelector(getChatRoomById(roomId));

    useEffect(() => {
        inputEl.current.focus();
    });

    const changeHandler = evt => {
        dispatch(updateInputValue(roomId, evt.target.value));
    };
    const sendMessageHandler = evt => {
        if (!inputValue) return;

        if (evt.type === 'keydown' && evt.key !== 'Enter') {
            return;
        }
        dispatch(sendNewMessage(roomId, userName));
        dispatch(updateInputValue(roomId, ''));
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
