import React, { useEffect, useState } from 'react';
import AllArticleOne from './AllArticleOne';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useNews from '../Hooks/useNews';
import TabArticle from './TabArticle';

const AllArticle = () => {
    
    const [news] = useNews()
    const [tabIndex, setTabIndex] = useState(0)
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);


    useEffect(() => {
        if (tabIndex === 0) {
            const filtered = news.filter(
                (item) =>
                    item.NewsTitle.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredArticles(filtered);
        }
    }, [searchQuery, tabIndex, news]);

    const filterByTag = (tag) => {
        return news.filter((item) => item.tag === tag);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.search.value);
    };

    const all = filteredArticles.length > 0 ? filteredArticles : news;

    const getArticlesByTab = (index) => {
        switch (index) {
            case 0:
                return <TabArticle items={all} />;
            case 1:
                return <TabArticle items={filterByTag('Economy')} />;
            case 2:
                return <TabArticle items={filterByTag('Entertainment')} />;
            
            case 3:
                return <TabArticle items={filterByTag('Politics')} />;
            
            case 4:
                return <TabArticle items={filterByTag('Sports')} />;
            
            case 5:
                return <TabArticle items={filterByTag('LifeStye')} />;
            
            case 6:
                return <TabArticle items={filterByTag('Technology')} />;
            
            case 7:
                return <TabArticle items={filterByTag('International')} />;
            case 8:
                return <TabArticle items={filterByTag('Environment')} />;
            default:
                return null;
        }
    };

    // const economy = news.filter(item => item.tag === 'Economy')
    // const all = news


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
                            <input type="search" name="search" placeholder='Search by Title' id="" className='mb-5 mr-2 p-2 rounded-l-xl text-black'  />
                            <input type="submit" value="Search" className='text-white rounded-r-xl p-2 bg-[#4A00FF]' />
                        </form>
                    </div>
                </div>
            </div>

            {/* Tag  */}
            <div className='max-w-screen-xl mx-auto px-5'>
                <p className='text-xl font-extrabold text-center'>Read Articles With Specific Tag</p>
                <div className='flex justify-center'>
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>All</Tab>
                            <Tab>Economy</Tab>
                            <Tab>Entertainment</Tab>
                            <Tab>Politics</Tab>
                            <Tab>Sports</Tab>
                            <Tab>LifeStye</Tab>
                            <Tab>Technology</Tab>
                            <Tab>International</Tab>
                            <Tab>Environment</Tab>
                        </TabList>
                        {getArticlesByTab(tabIndex)}
                    </Tabs>
                </div>
            </div>


            

        </div>
    );
};

export default AllArticle;