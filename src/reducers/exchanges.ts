import * as Actions from '../constants/actions';
import { handleActions } from 'redux-actions';
import { ProgressStatus } from "../constants/general";
import Currency from "../models/Currency";
import Market from "../models/Market";

export interface ExchangesStoreState {
    currenciesState?: ProgressStatus,
    currenciesList?: Array<Currency>,
    usdMarketState?: ProgressStatus;
    usdMarketList?: Array<Market>
    tableData?: Array<any>;
}

export const initialState: ExchangesStoreState = {
    currenciesState: ProgressStatus.None,
    currenciesList: null,
    usdMarketState: ProgressStatus.None,
    usdMarketList: null,
    tableData: null,
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
            usdMarketState: ProgressStatus.Failed,
        });
    },

    [Actions.App.UsdMarket.Request]: (state, action: any) => {
        return Object.assign({}, state, {
            usdMarketState: ProgressStatus.Loading,
        });
    },

    [Actions.App.UsdMarket.Success]: (state, action) => {
        const data = action.payload.data.market as Array<Market>;
        return Object.assign({}, state, {
            usdMarketState: ProgressStatus.Success,
            usdMarketList: data,
        });
    },

    [Actions.App.UsdMarket.Fail]: (state, action) => {
        return Object.assign({}, state, {
            usdMarketState: ProgressStatus.Failed,
        });
    },

    [Actions.App.changeTableData]: (state, action: any) => {
        return Object.assign({}, state, {
            tableData: action.payload.data,
        });
    },
}, initialState);