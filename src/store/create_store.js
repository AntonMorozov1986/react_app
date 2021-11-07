//import node modules
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

//import Reducers
import { ChatsReducer } from '@store/chats';
import { ConversationsReducer } from '@store/conversations';
import { GistsReducer } from '@store/gists';
import { AuthReducer } from '@store/auth';

//import middlewares
import { timeScheduler } from '@store/middlewares';
import { getGistsList } from '@api';

const combinedReducers = combineReducers({
    chats: ChatsReducer,
    conversations: ConversationsReducer,
    gists: GistsReducer,
    auth: AuthReducer,
});

const persistConfig = {
    key: 'ChatiX',
    storage,
    blacklist: ['gists', 'auth', 'conversations', 'chats'],
};

const persistedReducers = persistReducer(
    persistConfig,
    combinedReducers
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    persistedReducers,
    composeEnhancers(
        applyMiddleware(
            thunk.withExtraArgument({ getGistsList }),
            timeScheduler
        )
    )
);

export const persistedStore = persistStore(store);
