import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
// Logger with default options
import logger from 'redux-logger'

// import the root reducer
import rootReducer from 'reducers';

// initial Store structure
const initialState = {}

export default (history) => {
    let store = createStore(
        connectRouter(history)(rootReducer), // new root reducer with router state
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                logger // For Logging
            ),
        ),
    );

    return store
}