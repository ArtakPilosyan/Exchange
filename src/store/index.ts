import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { logger, axios, asyncDispatch } from '../middleware';
import rootReducer, { RootState } from '../reducers';
import thunk from 'redux-thunk';

export function configureStore(initialState?: RootState) {
    let middleware = applyMiddleware(thunk, logger, axios, asyncDispatch);

    if (process.env.NODE_ENV === 'development') {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;
    // const locale = localStorage.getItem('locale') || 'en';

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
