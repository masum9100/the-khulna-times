import React, { useEffect, useState } from 'react';
import HomeOneNews from './HomeOneNews';

const HomeNews = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.Package === "free");
                setNews(filteredData.slice(0, 9));
            })
    }, [])
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