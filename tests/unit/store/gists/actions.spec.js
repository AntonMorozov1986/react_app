import {
    SET_GISTS,
    ADD_GISTS,
    SET_GIST_PAGE,
    SET_GISTS_LOADING,
    SET_GISTS_ERROR
} from '@store/gists/types';
import {
    setGists,
    addGists,
    setGistPage,
    setGistsLoadingStatus,
    setGistsError
} from '@store/gists/actions';

const mockArraySetGists = [
    { id: 1, info: 'test1' },
    { id: 2, info: 'test2' },
    { id: 3, info: 'test3' },
    { id: 4, info: 'test4' },
];

const mockArrayAddGists = [
    { id: 5, info: 'test5' },
    { id: 6, info: 'test6' },
    { id: 7, info: 'test7' },
    { id: 8, info: 'test8' },
];

describe('@store/gists action', () => {
    it('should return the action object of setGists', () => {
        expect(setGists(mockArraySetGists)).toEqual({
            type: SET_GISTS,
            payload: {
                gists: mockArraySetGists,
            },
        });
    });
    it('should return the action object of addGist', () => {
        expect(addGists(mockArrayAddGists)).toEqual({
            type: ADD_GISTS,
            payload: {
                gists: mockArrayAddGists,
            },
        });
    });
    it('should return the action object of setGistPage', () => {
        const PAGE = 1;
        expect(setGistPage(PAGE)).toEqual({
            type: SET_GIST_PAGE,
            payload: {
                nextPage: PAGE,
            },
        });
    });
    it('should return the action object of setGistsLoadingStatus', () => {
        const LOADING_STATUS = true;
        expect(setGistsLoadingStatus(LOADING_STATUS)).toEqual({
            type: SET_GISTS_LOADING,
            payload: {
                isGistsLoading: LOADING_STATUS,
            },
        });
    });
    it('should return the action object of setGistsError', () => {
        const ERROR = new Error('test error');
        expect(setGistsError(ERROR)).toEqual({
            type: SET_GISTS_ERROR,
            payload: {
                gistError: ERROR,
            },
        });
    });
});
