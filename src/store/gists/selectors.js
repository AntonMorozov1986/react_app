export const getGists = state => {
    return {
        gists: state.gists.gists ?? [],
        nextPage: state.gists.nextPage,
        isGistsLoading: state.gists.isGistsLoading,
        gistError: state.gists.gistError,
    };

};
