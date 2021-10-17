import React from 'react';
import { List, ListItem, ListItemText, Divider, Box } from '@mui/material';

const styles = {
    margin: '0 1em 0 0',
};

export function ChatsList({ list }) {
    return (
        <List sx={styles}>
            {list.map((item, index) => {
                const isLastChat = index === list.length - 1;
                return (
                    <ListItem key={item.id}>
                        <Box style={{ width: '100%' }}>
                            <ListItemText
                                primary={item.name}
                            />
                            {!isLastChat && <Divider />}
                        </Box>

                    </ListItem>


                );
            })}
        </List>
    );
}

ChatsList.propTypes = {
    list: PropTypes.array,
};
