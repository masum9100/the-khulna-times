import React from 'react';
import HomeNews from './HomeNews';
import HomeSubscription from './HomeSubscription';
import HomePublisher from './HomePublisher';
import Banner from './Banner';
import HomeStatistic from './HomeStatistic';
import { Helmet } from 'react-helmet-async';


const Home = () => {


    return (

        <div>
            <Helmet>
                <title>The Khulna News | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto lg:flex'>
                <div className='lg:w-3/4 px-4'>
                    <HomeNews></HomeNews>
                </div>
                <div className='lg:w-1/4'>
                    <HomePublisher></HomePublisher>
                    <div className='w-1/2 md:w-3/4 mx-auto my-4 bg-gray-900 h-2'>
                        <hr />
                    </div>
                    <HomeStatistic></HomeStatistic>
                    <div className='w-1/2 md:w-3/4 mx-auto my-4 bg-gray-900 h-2'>
                        <hr />
                    </div>
                    <HomeSubscription></HomeSubscription>
                </div>
            </div>


        </div>
    );
};

export default Home;