import * as React from "react";
import { connect } from 'react-redux';
import { RootState } from "../../../reducers/index";
import PageTitle from "../shared/PageTitle";
import {loadCurrencies, loadUSDMarket } from "../../../actions/exchanges";
import Currency from "../../../models/Currency";
import Market from "../../../models/Market";
import {ProgressStatus} from "../../../constants/general";


export interface OwnProps {}

export interface DispatchProps {
    loadCurrencies: () => void;
    loadUSDMarket: () => void;
}

export interface StateProps {
    currenciesList: Array<Currency>;
    currenciesState: ProgressStatus;
    usdMarketList: Array<Market>;
    usdMarketState: ProgressStatus;
}

export interface State {}

export type Props = OwnProps & DispatchProps & StateProps;

export class Content extends React.Component<Props, State> {
    render() {
        return (
            <div className="home-page container-fluid">
                <PageTitle pageTitle="USD Exchange"/>
            </div>
        );
    }

    componentDidMount() {
        this.props.loadCurrencies();
        this.props.loadUSDMarket();
    }
}

function mapStateToProps(state: RootState): StateProps {
    return {
        currenciesList: state.exchanges.currenciesList,
        currenciesState: state.exchanges.currenciesState,
        usdMarketList: state.exchanges.usdMarketList,
        usdMarketState: state.exchanges.usdMarketState,
    };
}

function mapDispatchToProps (dispatch): DispatchProps {
    return {
        loadCurrencies: () => dispatch(loadCurrencies()),
        loadUSDMarket: () => dispatch(loadUSDMarket()),
    };
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Content);
