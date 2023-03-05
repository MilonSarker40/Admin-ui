import { combineReducers } from "redux";

import authReducers from "./authReducers"
import settlementReducer from './settlementReducer';
import agentReportReducer from './agentReporReducer';
import apiReducer from './apiReducer';

const reducers = combineReducers({
    auth: authReducers,
    settlement: settlementReducer,
    report: agentReportReducer,
    api: apiReducer
});

export default reducers;