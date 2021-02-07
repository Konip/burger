import { combineReducers, createStore, } from "redux";
import burgerStandartReducer from "./burger-standart-reducer"

// let reducers = combineReducers({
//     count: reducer
// })

let store = createStore(burgerStandartReducer)

window.store = store;
export default store