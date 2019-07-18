import * as Actions from '../constants/actions';
import API from '../constants/api';

export const loadCurrencies = () => {
    return {
        type: Actions.App.Currencies.Request,
        payload: {
            client: 'public',
            request: {
                method: 'get',
                url: API.App.Currencies,
            }
        }
    };
};