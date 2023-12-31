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
import Dashboard from '../Dashboard/Dashboard';
import AllUser from '../Dashboard/AllUser';
import AddPublisher from '../Dashboard/AddPublisher';
import AllArticleDash from '../Dashboard/AllArticleDash';
import MyProfile from '../UserPages/MyProfile';

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
                element: <PrivateRoute><SingleNewsPage></SingleNewsPage></PrivateRoute>,
                loader: ({params})=> fetch(`https://agn12ss-masum9100.vercel.app/news/${params.id}`)
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
                // loader: () => fetch('https://agn12ss-masum9100.vercel.app/newarticle')
            },
            {
                path: '/update-my-article/:id',
                element: <PrivateRoute><UpdateMyArticle></UpdateMyArticle></PrivateRoute>,
                loader: ({params}) => fetch(`https://agn12ss-masum9100.vercel.app/newarticle/${params.id}`)
            },
            {
                path: '/my-profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: "*",
                element: <NotFound></NotFound>
            }
            
            
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            
            {
                path: 'all-article',
                element: <AllArticleDash></AllArticleDash>,
                loader: () => fetch('https://agn12ss-masum9100.vercel.app/newarticle')
            },
            {
                path: 'all-user',
                element: <AllUser></AllUser>
            },
            {
                path: 'add-publisher',
                element: <AddPublisher></AddPublisher>
            }
        ]
    }
    
])

export default route;