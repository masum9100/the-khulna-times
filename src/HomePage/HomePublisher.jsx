import React, { useEffect, useState } from 'react';
import HomeOnePublisher from './HomeOnePublisher';

const HomePublisher = () => {
    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then (data => setNews(data.slice(0, 3)))
    },[])
    return (
        <div>
            <p className='font-bold text-center'>Our Honorable Publisher</p>
            {
                news.map(item => 
                <HomeOnePublisher
                key={item.NewsTitle}
                item={item}
                ></HomeOnePublisher>)
            }
            <button className='btn btn-primary'>Check All Publisher</button>
            
        </div>
    );
};

export default HomePublisher;