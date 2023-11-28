import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const HomeOneNews = ({ item }) => {
    const {_id, NewsTitle, ShortDescription, PublisherName, PublishedDate, Image1, Image2, Package } = item
    return (
        <div>
            <div className='flex justify-center p-4 border-black border-r-2 border-b-2'>
                <div>
                    <h1 className='text-2xl font-bold'>{NewsTitle}</h1>
                    <p className='text-gray-500'>{ShortDescription}</p>
                    <p className='py-1'>Publisher: <span className='font-semibold'>{PublisherName}</span></p>
                    <p>Published Date: <span className='font-semibold'>{PublishedDate}</span></p>
                    <p className='py-1'>Status: <span className='font-semibold'>{Package}</span></p>
                    <NavLink to={`/all-articles/${_id}`}><button className='btn btn-primary'>Click For Details</button></NavLink>
                </div>
                <div className='w-1/2'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}

                        modules={[Autoplay, Pagination,]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={Image1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={Image2} alt="" /></SwiperSlide>

                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default HomeOneNews;