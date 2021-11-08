import { SET_GISTS, ADD_GISTS, SET_GISTS_LOADING, SET_GISTS_ERROR, SET_GIST_PAGE } from './types';

export const setGists = gistsList => {
    return {
        type: SET_GISTS,
        payload: {
            gists: [...gistsList],
        },
    };
};

export const addGists = gistsList => {
    return {
        type: ADD_GISTS,
        payload: {
            gists: [...gistsList],
        },
    };
};

export const setGistPage = page => {
    return {
        type: SET_GIST_PAGE,
        payload: {
            nextPage: page,
        },
    };
};

export const setGistsLoadingStatus = loadingStatus => {
    return {
        type: SET_GISTS_LOADING,
        payload: {
            isGistsLoading: loadingStatus,
        },
    };
};

export const  setGistsError = error => {
    return {
        type: SET_GISTS_ERROR,
        payload: {
            gistError: error,
        },
    };
};
