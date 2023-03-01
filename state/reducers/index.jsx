import { combineReducers } from "redux";

import authReducers from "./authReducers"
import settlementReducer from './settlementReducer';

const reducers = combineReducers({
    auth: authReducers,
    settlement: settlementReducer,
});

export default reducers;