import React from 'react';
import HomeOneNews from './HomeOneNews';
import useNews from '../Hooks/useNews';

const HomeNews = () => {
    
    const [news] = useNews()
    const freeNews = news.filter(item => item.Package === "free").slice(0, 9)
    
    return (
        <div>
            {
                freeNews.map(item => <HomeOneNews
                    key={item.NewsTitle}
                    item={item}></HomeOneNews>)
            }
        </div>
    );
};

export default HomeNews;