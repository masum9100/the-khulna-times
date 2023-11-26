import React, { useEffect } from 'react';
import HomeNews from './HomeNews';
import HomeSubscription from './HomeSubscription';
import HomePublisher from './HomePublisher';
import Banner from './Banner';


const Home = () => {


    return (

        <div>
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
                    <HomeSubscription></HomeSubscription>
                </div>
            </div>
        </div>
    );
};

export default Home;