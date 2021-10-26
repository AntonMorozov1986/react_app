import { useSelector } from 'react-redux';

export function useParamsSelector(selector, ...params) {
    return useSelector(state => selector(state, ...params));
}
