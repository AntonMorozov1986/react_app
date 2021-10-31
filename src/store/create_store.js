import { createStore, combineReducers } from 'redux';
import { ProfileReducer } from '@store/profile';
import { ChatsReducer } from '@store/chats';

export const store = createStore(
    combineReducers({
        profile: ProfileReducer,
        chatsList: ChatsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
