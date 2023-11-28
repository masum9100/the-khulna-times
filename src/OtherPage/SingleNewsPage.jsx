import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleNewsPage = () => {

    const loadedNews = useLoaderData()

    const heroStyle = {
        backgroundImage: `url(${loadedNews.BackgroundImage})`,
    };

    return (
        <div>
            <div className="hero " style={heroStyle}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" py-5">
                        <h1 className="my-5 text-3xl font-bold text-white">{loadedNews.NewsTitle}</h1>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-lg mx-auto my-2 flex justify-center'>
                <p className='text-sm text-gray-500 w-3/5'>{loadedNews.ShortDescription}</p>
                <div className='flex items-center'>
                    <img src={loadedNews.PublisherPhoto} alt="" className='w-10 h-10 rounded-full' />
                    <p className='text-sm text-gray-500'>{loadedNews.PublisherName}</p>
                    <p className='text-sm text-gray-500'>/ Released on: {loadedNews.PublishedDate}</p>
                </div>

            </div>
            <div className='max-w-screen-lg mx-auto my-10'>
                <p className='text-xl'>{loadedNews.Description1}</p>
                <div className='flex justify-center my-5'><img src={loadedNews.Image1} alt="" /></div>
                <p className='text-xl'>{loadedNews.Description2}</p>
                <div className='flex justify-center my-5'><img src={loadedNews.Image2} alt="" /></div>
                <p className='text-xl'>{loadedNews.Description3}</p>

            </div>
        </div>
    );
};

export default SingleNewsPage;