import {combineReducers, createStore} from "redux";
import authReducer from "./authReducer";

import startReducer from "./startReducer";
import authorMainReducer from "./authorMainReducer";
import authorApplicationReducer from "./authorApplicationsReducer";


let reducers = combineReducers(
    {
        startPage: startReducer,
        authPage: authReducer,
        authorMain:authorMainReducer,
        authorApplication: authorApplicationReducer
    }
);
let store = createStore(reducers);
export default store