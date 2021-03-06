import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import basket from "./basket"

let reducers = combineReducers({
    basket: basket,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));


export default store