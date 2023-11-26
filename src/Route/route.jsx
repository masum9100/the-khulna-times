import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainRoute from './MainRoute';
import Home from '../HomePage/Home';
import AllArticles from '../AllArticles/AllArticles';
import Subscription from '../OtherPage/Subscription'

const NotFound = () => {
    return (
        <div className="text-center flex justify-center my-48">
            <h1 className="bg-red-600 rounded-full text-white inline px-10 py-8 text-3xl ">Error 404: Page not found</h1>
        </div>
    );
};

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute></MainRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-articles',
                element: <AllArticles></AllArticles>
            },
            {
                path: '/subscription',
                element: <Subscription></Subscription>
            },
            
            
        ]
    }
    
])

export default route;