import LoginFrom from '../LoginFrom/LoginFrom.js';
import TempApp from '../../pages/app.js';

import { useEffect, useState } from 'react';

const MainApp = ({Component, pageProps}) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);

    useEffect(() => {
        const logState = localStorage.getItem("loginData")
        console.log(logState);
        setIsloggedIn(logState);
        console.log(isLoggedIn);
    }, [])

    const renderApp = isLoggedIn ? <TempApp Component={Component} pageProps={pageProps} /> : <LoginFrom />

    return (
        renderApp 
    )
}

export default MainApp;