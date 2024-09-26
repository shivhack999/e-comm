import React from 'react';
import { Outlet } from 'react-router-dom';
// import NavBar from '../navbar/Index';
import NavBar from '../common/UpdatedNav/index'
import Footer from '../Footer/Index';

const Layout = () => {
    return (
        <React.Fragment>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;