import * as React from "react";
import { connect } from 'react-redux';
import { RootState } from "../../../reducers/index";
import PageTitle from "../shared/PageTitle";
import {loadCurrencies} from "../../../actions/exchanges";
import Currency from "../../../models/Currency";


export interface OwnProps {}

export interface DispatchProps {
    loadCurrencies: () => void;
}

export interface StateProps {
    currenciesList: Array<Currency>;
}

export interface State {}

export type Props = OwnProps & DispatchProps & StateProps;


export class Content extends React.Component<Props, State> {
    render() {
        console.log(this.props.currenciesList);
        return (
            <div className="home-page container-fluid">
                <PageTitle pageTitle="USD Exchange"/>
                React App
            </div>
        );
    }

    componentDidMount() {
        this.props.loadCurrencies();
    }
}

function mapStateToProps(state: RootState): StateProps {
    return {
        currenciesList: state.exchanges.currenciesList,
    };
}

function mapDispatchToProps (dispatch): DispatchProps {
    return {
        loadCurrencies: () => dispatch(loadCurrencies()),
    };
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Content);
