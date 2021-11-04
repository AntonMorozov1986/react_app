export const timeScheduler = () => next => action => {
    if (!action.meta || !action.meta.delay) {
        return next(action);
    }

    return setTimeout(() => {
        return next(action);
    }, action.meta.delay);
};
