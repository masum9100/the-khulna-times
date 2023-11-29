import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, } from 'swiper/modules';
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from 'sweetalert2';

const CardMyArticle = ({ myArticle }) => {
    const { _id, newsTitle, short_description, long_description, user_email, photo_url1, photo_url2, tag } = myArticle
    const [deleted, setDeleted] = useState(false)


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/newarticle/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            setDeleted(true)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your article has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }
    return (
        <div className='max-w-screen-lg mx-auto h-96'>

            {
                deleted ? null : (
                    <div className='flex justify-between p-4 border-black border-2 my-2'>
                        <div>
                            <h1 className='text-2xl font-bold'>Title: {newsTitle}</h1>
                            <p className='text-gray-500'>Short Des: {short_description}</p>
                            <hr />
                            <p className=''>Long Des: {short_description}</p>
                            <p className='py-1'>Publisher Email: <span className='font-semibold'>{user_email}</span></p>

                            <div className='flex justify-center gap-2'>
                                <button className='btn bg-green-800 text-white font-extrabold text-xl'><FaRegEdit></FaRegEdit></button>
                                <button onClick={() => handleDelete(_id)} className='btn bg-red-800 text-white font-extrabold text-xl'><AiOutlineDelete></AiOutlineDelete></button>
                            </div>
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
                                <SwiperSlide><img src={photo_url1} alt="" className='h-72' /></SwiperSlide>
                                <SwiperSlide><img src={photo_url2} alt="" className='h-72' /></SwiperSlide>

                            </Swiper>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default CardMyArticle;