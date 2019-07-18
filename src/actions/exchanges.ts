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

export const loadUSDMarket = () => {
    return {
        type: Actions.App.UsdMarket.Request,
        payload: {
            client: 'public',
            request: {
                method: 'get',
                url: API.App.UsdMarket,
            }
        }
    };
};
