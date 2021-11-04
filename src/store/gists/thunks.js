import { addGists, setGistPage, setGists, setGistsError, setGistsLoadingStatus } from '@store/gists/actions';

export const getGistsRequest = (page = 1) => async (dispatch, getState, api) => {
    try {
        dispatch(setGistsLoadingStatus(true));
        dispatch(setGistsError(null));

        const { data } = await api.getGistsList(page);
        if (page === 1) {
            dispatch(setGists(data));
        } else {
            dispatch(addGists(data));
        }
        dispatch(setGistPage(page + 1));
    } catch (e) {
        console.error('Request error');
        console.error('Error message - ', e.message);
        console.error('RequestURL', e.request.responseURL);
        dispatch(setGistsError(e));
    } finally {
        dispatch(setGistsLoadingStatus(false));
    }
};


