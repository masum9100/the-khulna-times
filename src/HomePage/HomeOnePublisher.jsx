import React from 'react';

const HomeOnePublisher = ({ item }) => {
    const { PublisherPhoto, PublisherName } = item
    return (
        <div>
            <div className='border-2 border-gray-400 py-1'>
                <div className='flex justify-center'>
                    <img src={PublisherPhoto} alt="" className='rounded-full w-60 h-60' />
                </div>
                <div>
                    <p className='text-2xl font-bold text-center'>{PublisherName}</p>
                </div>
            </div>
            
        </div>

    );
};

export default HomeOnePublisher;