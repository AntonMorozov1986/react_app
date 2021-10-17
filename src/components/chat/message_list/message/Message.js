import React from 'react';

import { ListItem, ListItemText } from '@mui/material';

export function Message({ message }) {
    return (
        <ListItem>
            <ListItemText
                primary={message.author}
                secondary={message.text}
            />
        </ListItem>
    );
}
Message.propTypes = {
    message: PropTypes.object,
};
