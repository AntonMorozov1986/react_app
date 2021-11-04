import axios from 'axios';

class Request {
    constructor() {
        this.request = axios.create({
            baseURL: API_BASE_URL,
        });
    }


    get(url) {
        return this.request.get(url);
    }

    post(url, data) {
        return this.request.post(url, data);
    }
}

export const request = new Request();
