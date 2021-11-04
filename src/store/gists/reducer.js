import { ADD_GISTS, SET_GIST_PAGE, SET_GISTS, SET_GISTS_ERROR, SET_GISTS_LOADING } from './types';

const initialGistsState = {
    gists: [],
    nextPage: 1,
    isGistsLoading: false,
    gistError: null,
};

export const GistsReducer = (state = initialGistsState, action) => {
    switch (action.type) {
        case SET_GISTS:
            return {
                ...state,
                gists: [
                    ...action.payload.gists,
                ],
            };
        case ADD_GISTS:
            return {
                ...state,
                gists: [
                    ...state.gists,
                    ...action.payload.gists,
                ],
            };
        case SET_GIST_PAGE:
            return {
                ...state,
                nextPage: action.payload.nextPage,
            };
        case SET_GISTS_LOADING:
            return {
                ...state,
                isGistsLoading: action.payload.isGistsLoading,
            };
        case SET_GISTS_ERROR:
            return {
                ...state,
                gistError: action.payload.gistError,
            };
        default:
            return state;
    }
};
