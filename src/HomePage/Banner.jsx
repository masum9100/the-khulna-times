import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';



const Banner = () => {

  return (
    <div className='max-w-screen-xl mx-auto my-5'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='border-2 border-blue-600 p-2'>
          <img src="https://i.ibb.co/g9zk8hg/Artboard-1.jpg" alt="" />
          <p className='font-bold'>X May Lose Up to $75 Million in Revenue as More Advertisers</p>
          <p className='text-gray-500'>Internal documents show companies like Airbnb, Coca-Cola and Microsoft have halted ads, or may do so, after Elon Musk’s endorsement of an antisemitic...</p></div></SwiperSlide>
        <SwiperSlide><div className='border-2 border-blue-600 p-2'>
          <img src="https://i.ibb.co/LS4fL7v/Artboard-2.jpg" alt="" />
          <p className='font-bold'>Watching People Watch a Game. With 100,000 Friends.</p>
          <p className='text-gray-500'>Soccer fans are tuning out broadcasts in favor of watchalongs: streaming parties where you hear what you want to hear and see everything except the game.</p></div></SwiperSlide>
        <SwiperSlide><div className='border-2 border-blue-600 p-2'>
          <img src="https://i.ibb.co/FqHKtwC/Artboard-3.jpg" alt="" />
          <p className='font-bold'>David who? Meet the Air Force Reserve major </p>
          <p className='text-gray-500'>Air Force Reserve major and Florida businessman David J. Stuckenberg is entering a crowded race to become the next Republican presidential nominee — </p></div></SwiperSlide>
        <SwiperSlide><div className='border-2 border-blue-600 p-2'>
          <img src="https://i.ibb.co/T1668QP/Artboard-4.jpg" alt="" />
          <p className='font-bold'>DeSantis is racking up big endorsements in Iowa. But Trump</p>
          <p className='text-gray-500'>Florida Gov. Ron DeSantis has assembled an illustrious list of Iowa endorsers, including Iowa Gov. Kim Reynolds and evangelical leader Bob Vander Plaats.</p></div></SwiperSlide>
        <SwiperSlide><div className='border-2 border-blue-600 p-2'>
          <img src="https://i.ibb.co/r3kbLbb/Artboard-5.jpg" alt="" />
          <p className='font-bold'>Donald Trump slams Iowa Gov. Reynolds as -</p>
          <p className='text-gray-500'>I wonder what position Kim was promised in order to back someone who is so far down in the polls, Trump said of Reynolds' endorsement of DeSantis.</p></div></SwiperSlide>
        <SwiperSlide><div className='border-2 border-blue-600 p-2'>
          <img src="https://i.ibb.co/DR1ZPpj/Artboard-6.jpg" alt="" />
          <p className='font-bold'>Beat Ohio State or be labeled a gigantic fraud</p>
          <p className='text-gray-500'>If the Wolverines fall to Ohio State on Saturday, Michigan will never live down the conclusion that it flipped this rivalry by cheating. It’s bigger than the rivalry.</p></div></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;