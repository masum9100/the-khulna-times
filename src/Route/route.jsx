import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainRoute from './MainRoute';
import Home from '../HomePage/Home';
import Subscription from '../OtherPage/Subscription'
import AllArticle from '../OtherPage/AllArticle';
import PremiumArticle from '../OtherPage/PremiumArticle';
import SingleNewsPage from '../OtherPage/SingleNewsPage';
import Login from '../LoginSignup/Login';
import Registration from '../LoginSignup/Registration';
import PrivateRoute from '../FirebaseAuth/PrivateRoute';
import AddArticle from '../UserPages/AddArticle';
import MyArticle from '../UserPages/MyArticle';
import UpdateMyArticle from '../UserPages/UpdateMyArticle';

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
                element: <PrivateRoute><Subscription></Subscription></PrivateRoute>
            },
            {
                path: '/premium-article',
                element: <PrivateRoute><PremiumArticle></PremiumArticle></PrivateRoute>
            },
            {
                path: "/all-articles/:id",
                element: <SingleNewsPage></SingleNewsPage>,
                loader: ({params})=> fetch(`http://localhost:5001/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/add-article',
                element: <PrivateRoute><AddArticle></AddArticle></PrivateRoute>
            },
            {
                path: '/my-article',
                element: <PrivateRoute><MyArticle></MyArticle></PrivateRoute>,
                loader: () => fetch('http://localhost:5001/newarticle')
            },
            {
                path: '/update-my-article/:id',
                element: <PrivateRoute><UpdateMyArticle></UpdateMyArticle></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/newarticle/${params.id}`)
            }
            
            
            
        ]
    }
    
])

export default route;