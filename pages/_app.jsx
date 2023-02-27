import { Provider } from 'react-redux';
import { persistor, store } from '../state/actions/store';

import { PersistGate } from 'redux-persist/lib/integration/react';

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import MainApp from '../comopnents/MainApp/MainApp.js'


export default function App({ Component, pageProps }) {
  const isLoggedin = true;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp Component={Component} pageProps={pageProps}/>
      </PersistGate>
    </Provider>
  );
}
