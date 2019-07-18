import * as Axios from 'axios';
import { multiClientMiddleware } from 'redux-axios-middleware';

export const SERVER_URL = "http://voltapi.vtgsoftware.com/api";

export default multiClientMiddleware({
    public: {
        client: Axios.default.create({
            baseURL: SERVER_URL,
            responseType: 'json',
            withCredentials: false,
        }),
    },
    private: {
        client: Axios.default.create({
            baseURL: SERVER_URL,
            responseType: 'json',
            headers: {
                Authorization: sessionStorage.getItem("accessToken"),
            }
        })
    },
});