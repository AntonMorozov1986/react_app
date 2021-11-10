import { GistsReducer } from '@store/gists';
import {
    SET_GISTS,
    ADD_GISTS,
    SET_GIST_PAGE,
    SET_GISTS_LOADING,
    SET_GISTS_ERROR
} from '@store/gists/types';

const initialGistsState = {
    gists: [],
    nextPage: 1,
    isGistsLoading: false,
    gistError: null,
};

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

describe('@store/gists reducer', () => {
    it('should return the initial state', () => {
        expect(GistsReducer(undefined, {})).toEqual(initialGistsState);
    });
    it('should handle SET_GISTS', () => {
        const testAction = {
            type: SET_GISTS,
            payload: {
                gists: [...mockArraySetGists],
            },
        };
        expect(GistsReducer(initialGistsState, testAction))
            .toEqual({
                ...initialGistsState,
                gists: [...mockArraySetGists],
            });
    });
    it('should handle ADD_GISTS', () => {
        const testAction = {
            type: ADD_GISTS,
            payload: {
                gists: [...mockArrayAddGists],
            },
        };
        const testState = {
            ...initialGistsState,
            gists: [...mockArraySetGists],
        };
        expect(GistsReducer(testState, testAction))
            .toEqual({
                ...testState,
                gists: [
                    ...testState.gists,
                    ...mockArrayAddGists,
                ],
            });
    });
    it('should handle SET_GIST_PAGE', () => {
        const testPage = 3;
        const testAction = {
            type: SET_GIST_PAGE,
            payload: {
                nextPage: testPage,
            },
        };
        const testState = {
            ...initialGistsState,
        };
        expect(GistsReducer(testState, testAction))
            .toEqual({
                ...testState,
                nextPage: testPage,
            });
    });
    it('should handle SET_GISTS_LOADING', () => {
        const testGistsLoadingStatus = true;
        const testAction = {
            type: SET_GISTS_LOADING,
            payload: {
                isGistsLoading: testGistsLoadingStatus,
            },
        };
        const testState = {
            ...initialGistsState,
        };
        expect(GistsReducer(testState, testAction))
            .toEqual({
                ...testState,
                isGistsLoading: testGistsLoadingStatus,
            });
    });
    it('should handle SET_GISTS_ERROR', () => {
        const testGistError = 'Error message';
        const testAction = {
            type: SET_GISTS_ERROR,
            payload: {
                gistError: testGistError,
            },
        };
        const testState = {
            ...initialGistsState,
        };
        expect(GistsReducer(testState, testAction))
            .toEqual({
                ...testState,
                gistError: testGistError,
            });
    });
});
