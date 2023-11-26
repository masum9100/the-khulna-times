import React, { useEffect } from 'react';
import HomeNews from './HomeNews';
import HomeSubscription from './HomeSubscription';
import HomePublisher from './HomePublisher';

const Home = () => {

    
    return (
        <div className='max-w-screen-xl mx-auto lg:flex'>
            <div className='lg:w-3/4 px-4'>
                <HomeNews></HomeNews>
            </div>
            <div className='lg:w-1/4'>
                <HomePublisher></HomePublisher>
                <HomeSubscription></HomeSubscription>
            </div>
        </div>
    );
};

export default Home;