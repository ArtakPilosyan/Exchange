import * as Axios from 'axios';
import { multiClientMiddleware } from 'redux-axios-middleware';

export const SERVER_URL = "https://exchange-test-app.herokuapp.com";

export default multiClientMiddleware({
    public: {
        client: Axios.default.create({
            baseURL: SERVER_URL,
            responseType: 'json',
            withCredentials: false,
        }),
    },
});