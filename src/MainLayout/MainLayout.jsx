import React from 'react';
import Navbar from '../Pages/sheard/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/sheard/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;