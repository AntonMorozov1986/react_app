import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { combinedReducers } from '@store/create_store';

export const renderWithRedux = (component, { initialState }) => {
    const store = createStore(combinedReducers, initialState);

    return {
        store,
        ...render(
            <Provider store={store}>
                <BrowserRouter>{component}</BrowserRouter>
            </Provider>
        ),
    };
};
