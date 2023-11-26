import React from 'react';
import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';
import { Outlet } from 'react-router-dom';

const MainRoute = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainRoute;