import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';

const styles = {
    'padding': '1em',
    '&.Mui-selected': {
        backgroundColor: '#81D4FA',
    },
};

export function Room({ author, selected }) {
    return (
        <ListItemButton
            sx={styles}
            selected={selected}
        >
            <ListItemText
                primary={author}
            />
        </ListItemButton>
    );
}

Room.propTypes = {
    author: PropTypes.string,
    selected: PropTypes.bool,
    clickItemHandler: PropTypes.func,
};
