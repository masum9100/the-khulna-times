import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';
import { GrArticle } from "react-icons/gr";
import { GrGroup } from "react-icons/gr";
import { GrUserAdd } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className='max-w-screen-xl mx-auto p-5 flex'>
            <div className='w-64 min-h-full bg-[#4A00FF]'>
                <ul className='menu p-4 text-white'>
                    
                    <li><NavLink to={'/dashboard/all-article'}><GrArticle></GrArticle>All Article</NavLink></li>
                    <li><NavLink to={'/dashboard/all-user'}><GrGroup></GrGroup>All User</NavLink></li>
                    <li><NavLink to={'/dashboard/add-publisher'}><GrUserAdd></GrUserAdd>Add Publisher</NavLink></li>
                    <div className="divider divider-secondary"></div>
                    <li><NavLink to={'/'}><IoHomeOutline></IoHomeOutline>Home</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Helmet>
                <title>The Khulna News | Dashboard</title>
            </Helmet>
        </div>
    );
};

export default Dashboard;