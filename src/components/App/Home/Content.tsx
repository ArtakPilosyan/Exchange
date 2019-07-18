import * as React from "react";
import { connect } from 'react-redux';
import { RootState } from "../../../reducers/index";
import PageTitle from "../shared/PageTitle";
import {loadCurrencies, loadUSDMarket } from "../../../actions/exchanges";
import Currency from "../../../models/Currency";
import Market from "../../../models/Market";
import {ProgressStatus} from "../../../constants/general";
import {TabTypes} from "../../../constants/data";
import {isNullOrUndefined} from "util";
import {TableData} from "./TableData";


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

export interface State {
    tabType: number;
}

export type Props = OwnProps & DispatchProps & StateProps;

export class Content extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            tabType: TabTypes.USD,
        };
    }

    render() {
        const tabType = this.state.tabType;
        return (
            <div className="home-page container-fluid">
                <PageTitle pageTitle="USD Exchange"/>

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        onClick={() => this.setState({tabType: TabTypes.USD})}
                        className={"btn pointer "+ (tabType === TabTypes.USD? "btn-primary" : "btn-secondary")}>
                        USD
                    </button>
                    <button
                        type="button"
                        onClick={() => this.setState({tabType: TabTypes.Favorites})}
                        className={"btn pointer " + (tabType === TabTypes.Favorites? "btn-primary" : "btn-secondary")}>
                        FAVORITES
                    </button>
                </div>

                <hr/>
                {
                    this.renderData()
                }
            </div>
        );
    }

    componentDidMount() {
        this.props.loadCurrencies();
        this.props.loadUSDMarket();
    }

    private renderData(): JSX.Element {
        if (this.props.usdMarketState=== ProgressStatus.Success && this.props.currenciesState===ProgressStatus.Success) {
            if (isNullOrUndefined(localStorage.getItem('tablesData'))) {
                let currencyCodes = [];
                this.props.currenciesList.forEach((item: Currency) => {
                   currencyCodes[item.currency] = item.currencyName
                });
                const data = this.props.usdMarketList.map((item: Market) => {
                    return (
                        {
                            id: item.fromCurrencyId,
                            currencyCode: item.fromCurrency,
                            volume: item.volume,
                            price: item.price,
                            currencyName: currencyCodes[item.fromCurrency],
                            favorite: false
                        }
                    )
                });
                localStorage.setItem('tablesData', JSON.stringify(data));
            }
            return <TableData dataType={this.state.tabType}/>
        } else if (this.props.usdMarketState=== ProgressStatus.Failed || this.props.currenciesState===ProgressStatus.Failed) {
            return <div className="text-center">Somethings went wrong!</div>
        } else {
            return <div className="text-center">Loading <i className="fa fa-spinner fa-fw fa-spin" /></div>
        }
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
