import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { TbArticle } from "react-icons/tb";
import { GrArticle } from "react-icons/gr";
import { GrGroup } from "react-icons/gr";
import { GrUserAdd } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";

const Dashboard = () => {
    return (
        <div className='max-w-screen-xl mx-auto p-5 flex'>
            <div className='w-64 min-h-full bg-[#4A00FF]'>
                <ul className='menu p-4 text-white'>
                    <li><NavLink to={'/dashboard/my-profile'}><CgProfile></CgProfile>My Profile</NavLink></li>
                    <li><NavLink to={'/dashboard/my-article'}><TbArticle></TbArticle>My Article</NavLink></li>
                    <li><NavLink to={'/dashboard/all-article'}><GrArticle></GrArticle>All Article</NavLink></li>
                    <li><NavLink to={'/dashboard/all-user'}><GrGroup></GrGroup>All User</NavLink></li>
                    <li><NavLink to={'/dashboard/add-publisher'}><GrUserAdd></GrUserAdd>Add Publisher</NavLink></li>
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