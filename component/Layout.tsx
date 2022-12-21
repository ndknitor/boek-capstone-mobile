import React, { PropsWithChildren } from 'react'
import useAuthorizeInit from '../libs/hook/useAuthorizeInit'
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Layout({ children }: PropsWithChildren<{}>) {
    useAuthorizeInit();
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout