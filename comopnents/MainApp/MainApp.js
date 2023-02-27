import LoginFrom from '../LoginFrom/LoginFrom.js';
import TempApp from '../../pages/app.js';

import { useSelector } from 'react-redux';

import { useEffect, useState } from 'react';

const MainApp = ({Component, pageProps}) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);

    const logState = useSelector(state => state?.auth.isLoggedin);

    useEffect(() => {
        const logState = localStorage.getItem("loginData")
        console.log(logState);
        setIsloggedIn(logState);
        console.log(isLoggedIn);
    }, [])

    const renderApp = logState ? <TempApp Component={Component} pageProps={pageProps} /> : <LoginFrom />

    return (
        renderApp 
    )
}

export default MainApp;