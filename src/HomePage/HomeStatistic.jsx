import React from 'react';
import CountUp from 'react-countup';


const HomeStatistic = () => {
    return (
        <div>
            <h1 className='text-xl font-bold text-center mt-2'>Statistic</h1>
            <h1 className='text-xl text-center my-2'>Uncovering Stories Through Data</h1>
            <div className='text-xl flex justify-center font-bold'>

                <ul style={{ listStyleType: 'square' }}>
                    <li>
                        <p> Daily Visitor: <CountUp className='font-normal' duration={5} end={1000}></CountUp>+</p>
                    </li>
                    <li>
                        <p>Subscriber: <CountUp className='font-normal' duration={5} end={600}></CountUp>+</p>
                    </li>
                    <li>
                        <p>Publisher: <CountUp className='font-normal' duration={5} end={20}></CountUp></p>
                    </li>
                    <li>
                        <ul style={{ listStyleType: 'disc' }}>Social Media Engagement:
                            <li className='ml-10'><p>Likes: <CountUp className='font-normal' duration={5} end={5000}></CountUp>+</p></li>
                            <li className='ml-10'><p>Comments: <CountUp className='font-normal' duration={5} end={2300}></CountUp>+</p></li>
                            <li className='ml-10'><p>Shares: <CountUp className='font-normal' duration={5} end={1700}></CountUp>+</p></li>
                        </ul>
                    </li>
                    <li>
                        <p>Add Clicked: <CountUp className='font-normal' duration={5} end={10000}></CountUp>+</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomeStatistic;