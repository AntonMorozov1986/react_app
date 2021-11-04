import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGists, getGistsRequest } from '@store/gists';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';

export function Gists() {
    const dispatch = useDispatch();

    const { gists, isGistsLoading, gistError, nextPage } = useSelector(getGists);

    const sendRequest = useCallback(() => {
        dispatch(getGistsRequest());
    }, [dispatch]);

    useEffect(() => {
        if (!gists.length) {
            sendRequest();
        }
    }, [gists, sendRequest]);

    const loadMoreGists = () => {
        dispatch(getGistsRequest(nextPage));
    };

    if (isGistsLoading) {
        return <h3>Gists is loading. Please wait.</h3>;
    }

    if (gistError) {
        return (
            <div>
                <h1>При загрузке возникла ошибка.</h1>
                <h3>{gistError.message}</h3>
                <Button
                    variant="contained"
                    onClick={sendRequest}
                >
                    Повторить запрос
                </Button>
            </div>
        );
    }


    return (
        <div>
            <h1>Gists</h1>
            {gists?.map(gist => <p key={nanoid()}>{gist.url}</p>)}
            <Button
                variant="contained"
                onClick={loadMoreGists}
            >
                Загрузить еще
            </Button>
        </div>
    );
}
