import * as React from "react";
import { connect } from 'react-redux';
import { RootState } from "../../../reducers/index";
import PageTitle from "../shared/PageTitle";


export interface OwnProps {}

export interface DispatchProps {}

export interface StateProps {}

export interface State {}

export type Props = OwnProps & DispatchProps & StateProps;


export class Content extends React.Component<Props, State> {
    render() {
        return (
            <div className="home-page container-fluid">
                <PageTitle pageTitle="USD Exchange"/>
                React App
            </div>
        );
    }
}

function mapStateToProps(state: RootState): StateProps {
    return {};
}

function mapDispatchToProps (dispatch): DispatchProps {
    return {};
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Content);
