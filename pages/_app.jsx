import '../styles/globals.css';
// import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import Layout from '../comopnents/Layout/Layout';
import LoginFrom from '../comopnents/LoginFrom/LoginFrom';
import TempApp from './app';
import MainApp from '../comopnents/MainApp/MainApp.js'


export default function App({ Component, pageProps }) {
  const isLoggedin = true;

  return (
    <MainApp Component={Component} pageProps={pageProps}/>
  );
}
