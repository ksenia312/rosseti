import {combineReducers, createStore} from "redux";
import authReducer from "./authReducer";

import startReducer from "./startReducer";
import authorMainReducer from "./authorMainReducer";


let reducers = combineReducers(
    {
        startPage: startReducer,
        authPage: authReducer,
        authorMain:authorMainReducer
    }
);
let store = createStore(reducers);
export default store