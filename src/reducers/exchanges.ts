import * as Actions from '../constants/actions';
import { handleActions } from 'redux-actions';
import { ProgressStatus } from "../constants/general";
import Currency from "../models/Currency";

export interface ExchangesStoreState {
    currenciesState?: ProgressStatus,
    currenciesList?: Array<Currency>,
}

export const initialState: ExchangesStoreState = {
    currenciesState: ProgressStatus.None,
    currenciesList: null
};

export default handleActions<ExchangesStoreState, any>({
    [Actions.App.Currencies.Request]: (state, action: any) => {
        return Object.assign({}, state, {
            currenciesState: ProgressStatus.Loading,
        });
    },

    [Actions.App.Currencies.Success]: (state, action) => {
        const data = action.payload.data.currencies as Array<Currency>;
        return Object.assign({}, state, {
            currenciesState: ProgressStatus.Success,
            currenciesList: data,
        });
    },

    [Actions.App.Currencies.Fail]: (state, action) => {
        return Object.assign({}, state, {
            currenciesState: ProgressStatus.Failed,
        });
    },
}, initialState);