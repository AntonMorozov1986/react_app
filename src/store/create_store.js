//import node modules
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

//import Reducers
import { ProfileReducer } from '@store/profile';
import { ChatsReducer } from '@store/chats';
import { ConversationsReducer } from '@store/conversations';

//import middlewares
import { timeScheduler } from '@store/middlewares';

const combinedReducers = combineReducers({
    profile: ProfileReducer,
    chats: ChatsReducer,
    conversations: ConversationsReducer,
});

const persistConfig = {
    key: 'ChatiX',
    storage,
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
            thunk,
            timeScheduler
        )
    )
);

export const persistedStore = persistStore(store);
