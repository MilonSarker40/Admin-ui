import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import reducers from "../reducers/index";

const persistConfig = {
    key: 'data',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

let composeEnhancers = compose;
if (typeof window !== "undefined") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore (
    persistedReducer,
    {},
    composeEnhancers(applyMiddleware(thunk)),
)

export const persistor = persistStore(store);