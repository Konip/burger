import { combineReducers, createStore, } from "redux";
import burgerStandartReducer from "./burger-standart-reducer"
import basket from "./basket"

let reducers = combineReducers({
    // burgerStandart: burgerStandartReducer,
    basket: basket,
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;
export default store