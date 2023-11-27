import React, { useEffect, useState } from 'react';
import AllArticleOne from './AllArticleOne';
import { Helmet } from 'react-helmet-async';

const AllArticle = () => {
    const [originalNews, setOriginalNews] = useState([]);
    const [newss, setNews] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setOriginalNews(data);
                setNews(data);
            });
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() === '') {
            setNews(originalNews);
        } else {
            const filteredNews = originalNews.filter(news =>
                news.NewsTitle.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setNews(filteredNews);
        }
    };
    
    return (
        <div>
            <Helmet>
                <title>The Khulna News | All Article</title>
            </Helmet>
            <div className="hero my-5" style={{ backgroundImage: 'url(https://i.ibb.co/1q2MT8H/collection-newspapers.webp)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="py-10">
                        <h1 className="mb-5 text-3xl font-bold">Search for Specific Article</h1>
                        <form className='w-full' onSubmit={handleSearch}>
                            <input type="search" name="search" placeholder='Search by Title' id="" className='mb-5 mr-2 p-2 rounded-l-xl text-black' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                            <input type="submit" value="Search"  className='text-white rounded-r-xl p-2 bg-[#4A00FF]'/>
                        </form>
                    </div>
                </div>
            </div>
            
            {
                newss.map(item=> <AllArticleOne
                key={item.NewsTitle}
                item={item}
                ></AllArticleOne>)
            }
            
        </div>
    );
};

export default AllArticle;