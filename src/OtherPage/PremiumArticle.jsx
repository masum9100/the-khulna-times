import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PremiumOne from './PremiumOne';

const PremiumArticle = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.Package === "premium");
                setNews(filteredData);
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>The Khulna News | Premium Article</title>
            </Helmet>
            <div className="hero my-5" style={{ backgroundImage: 'url(https://i.ibb.co/1q2MT8H/collection-newspapers.webp)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="py-10">
                        <h1 className="mb-5 text-3xl font-bold">Our Premium Articles</h1>
                        
                    </div>
                </div>
            </div>
            {
                news.map(item => <PremiumOne
                    key={item.NewsTitle}
                    item={item}></PremiumOne>)
            }
        </div>
    );
};

export default PremiumArticle;