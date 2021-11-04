import { request } from './request';

export const getGistsList = (page = 1) => request.get(`/gists/public?page=${page}`);
