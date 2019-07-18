import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { Home } from "../../components/App/index";
import ROUTES from "../../constants/routes";


export namespace App {
    export interface Props extends RouteComponentProps<void> {}
    export interface State {}
}

export class AppLayout extends React.Component<App.Props, App.State> {
    render() {
        return (
            <div>
                <div className="container-fluid mt-4">
                    <Switch>
                        <Route exact path={ROUTES.App.Home} component={Home}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
