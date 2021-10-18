import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';

const styles = {
    'padding': '1em',
    '&.Mui-selected': {
        backgroundColor: '#81D4FA',
    },
};

export function Room({ name, selected, clickItemHandler }) {
    return (
        <ListItemButton
            sx={styles}
            selected={selected}
            onClick={clickItemHandler}
        >
            <ListItemText
                primary={name}
            />
        </ListItemButton>
    );
}

Room.propTypes = {
    name: PropTypes.string,
    selected: PropTypes.bool,
    clickItemHandler: PropTypes.func,
};
