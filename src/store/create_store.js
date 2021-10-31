import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    combinedReducers,
    composeEnhancers(
        applyMiddleware(
            thunk,
            timeScheduler
        )
    )
);
