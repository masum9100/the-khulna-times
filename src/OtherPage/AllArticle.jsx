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

    const economy = news.filter(item => item.tag === 'Economy')
    const entertainment = news.filter(item => item.tag === 'Entertainment')
    const politics = news.filter(item => item.tag === 'Politics')
    const sports = news.filter(item => item.tag === 'Sports')
    const lifeStye = news.filter(item => item.tag === 'LifeStye')
    const technology = news.filter(item => item.tag === 'Technology')
    const international = news.filter(item => item.tag === 'International')
    const environment = news.filter(item => item.tag === 'Environment')
    const all = news

    

    

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
                        <form className='w-full'>
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
                        <TabPanel><TabArticle items={all}></TabArticle></TabPanel>
                        <TabPanel><TabArticle items={economy}></TabArticle></TabPanel>
                        <TabPanel><TabArticle items={entertainment}></TabArticle></TabPanel>
                        <TabPanel><TabArticle items={politics}></TabArticle></TabPanel>
                        <TabPanel><TabArticle items={sports}></TabArticle></TabPanel>
                        <TabPanel><TabArticle items={lifeStye}></TabArticle></TabPanel>
                        <TabPanel><TabArticle items={technology}></TabArticle></TabPanel>
                        <TabPanel><TabArticle items={international}></TabArticle></TabPanel>
                        <TabPanel><TabArticle items={environment}></TabArticle></TabPanel>
                    </Tabs>
                </div>
            </div>

            

        </div>
    );
};

export default AllArticle;