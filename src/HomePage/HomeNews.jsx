import React, { useEffect, useState } from 'react';
import HomeOneNews from './HomeOneNews';

const HomeNews = () => {
const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then (data => setNews(data.slice(0, 6)))
    },[])
    return (
        <div>
            {
                news.map(item => <HomeOneNews
                key={item.NewsTitle}
                item={item}></HomeOneNews>)
            }
        </div>
    );
};

export default HomeNews;