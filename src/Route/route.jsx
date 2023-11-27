import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainRoute from './MainRoute';
import Home from '../HomePage/Home';
import Subscription from '../OtherPage/Subscription'
import AllArticle from '../OtherPage/AllArticle';
import PremiumArticle from '../OtherPage/PremiumArticle';

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
                element: <AllArticle></AllArticle>
            },
            {
                path: '/subscription',
                element: <Subscription></Subscription>
            },
            {
                path: '/premium-article',
                element: <PremiumArticle></PremiumArticle>
            }
            
            
            
        ]
    }
    
])

export default route;