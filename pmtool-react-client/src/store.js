import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { errorReducer } from './reducers/errorReducer';
import { projectReducer } from './reducers/projectReducer';
import { backlogReducer } from './reducers/backlogReducer';

const initialState = {}
const middleware = [thunk]

let store;

const rootReducer = combineReducers({
    errors: errorReducer,
    projectList: projectReducer,
    backlog: backlogReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//if (window.navigator.userAgent.includes("Chrome")) {
store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleware)));
/*} else {
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware)));
}*/

export default store;