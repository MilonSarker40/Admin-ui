import { combineReducers } from "redux";

import authReducers from "./authReducers"
import settlementReducer from './settlementReducer';
import agentReportReducer from './agentReporReducer';
import apiReducer from './apiReducer';
import trxReducer from './trxReducer';
import dealerReportReducer from './dealerReportReducer';

const reducers = combineReducers({
    auth: authReducers,
    settlement: settlementReducer,
    report: agentReportReducer,
    api: apiReducer,
    trx: trxReducer,
    dealer: dealerReportReducer,
});

export default reducers;