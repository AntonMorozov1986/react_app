import { createStore, combineReducers } from 'redux';
import { ProfileReducer } from './profile';

export const store = createStore(
    combineReducers({
        profile: ProfileReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
