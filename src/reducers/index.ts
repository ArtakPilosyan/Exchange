import { combineReducers } from "redux";
import exchanges, { ExchangesStoreState, initialState as exchangesInitialState } from './exchanges';

export interface RootState {
    exchanges: ExchangesStoreState;
}

export const ExchangesInitialState = exchangesInitialState;

export default combineReducers<RootState>({
    exchanges
});