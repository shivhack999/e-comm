import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../navbar/Index';
import Footer from '../Footer/Index';

const Layout = () => {
    return(
        <React.Fragment>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;