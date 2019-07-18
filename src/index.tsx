import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { AppLayout } from './containers/App';
import { RootState } from "./reducers/index";
import ROUTES from "./constants/routes";

const persistedState: RootState = {};

const store = configureStore(persistedState);
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path={ROUTES.App.Home} component={AppLayout} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
