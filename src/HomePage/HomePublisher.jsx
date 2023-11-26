import React, { useEffect, useState } from 'react';
import HomeOnePublisher from './HomeOnePublisher';

const HomePublisher = () => {
    const [news, setNews] = useState([])
    const [displayCount, setDisplayCount] = useState(3)
    const [showLess, setShowLess] = useState(false)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setNews(data.slice(0, 20)));
    }, [])

    const handleSeeMore = () => {
        setDisplayCount(prevCount => Math.min(prevCount + 20, news.length));
        setShowLess(true)
    };

    const handleSeeLess = () => {
        setDisplayCount(3)
        setShowLess(false)
    };

   


    return (
        <div>
            <p className='text-xl font-bold text-center my-2'>Our Honorable Publisher</p>
            {
                news.slice(0, displayCount).map(item =>
                    <HomeOnePublisher
                        key={item.NewsTitle}
                        item={item}
                    ></HomeOnePublisher>)
            }

            {displayCount < news.length ? (
                <button className='btn btn-primary my-2' onClick={handleSeeMore}>
                    See More Publisher
                </button>
            ) : (
                <button className='btn btn-secondary my-2' onClick={handleSeeLess}>
                    See Less Publisher
                </button>
            )}

        </div>
    );
};

export default HomePublisher;