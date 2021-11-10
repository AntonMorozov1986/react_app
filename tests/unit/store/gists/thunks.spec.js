import { getGistsRequest } from '@store/gists';

describe('get gists thunk', () => {
    it('get gists success', async () => {
        const PAGE = 1;
        const dispatch = jest.fn();
        const getGistsList = jest.fn().mockResolvedValue({ data: 'ok' });

        const thunk = getGistsRequest(PAGE);

        await thunk(dispatch, null, { getGistsList });

        expect(getGistsList).toBeCalledTimes(1);
        expect(getGistsList).toBeCalledWith(PAGE);
    });
});
