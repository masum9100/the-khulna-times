import React, { useEffect, useState } from 'react';
import AllArticleOne from './AllArticleOne';

const AllArticle = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
               
                setNews(data);
            })
    }, [])
    return (
        <div>
            {
                news.map(item=> <AllArticleOne
                key={item.NewsTitle}
                item={item}
                ></AllArticleOne>)
            }
            
        </div>
    );
};

export default AllArticle;