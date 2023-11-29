import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyArticle = () => {

    const myArticle = useLoaderData()

    const {_id, newsTitle, short_description, long_description, user_email, photo_url1, photo_url2, tag } = myArticle

    const handleUpdateArticle = event => {
        event.preventDefault()
        const form = event.target
        const newsTitle = form.article_title.value
        const short_description = form.short_description.value
        const long_description = form.long_description.value
        const user_email = form.user_email.value
        const photo_url1 = form.photo_url1.value
        const photo_url2 = form.photo_url2.value
        const tag = form.tag.value;
        const updateArticle = { newsTitle, short_description, long_description, user_email, photo_url1, photo_url2, tag }
        console.log(updateArticle)

        fetch(`http://localhost:5001/newarticle/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateArticle)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if (data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Article Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OKAY'
                })
            }
        })
    }

    

    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/1q2MT8H/collection-newspapers.webp)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className='text-5xl font-bold text-center py-10 '>Update info for the Article</h1>
                    </div>
                </div>
            </div>

            <div className='my-4 h-2 bg-[#4A00FF] w-3/4 mx-auto'></div>
            <form onSubmit={handleUpdateArticle}>
                <div className='grid gap-7'>
                    <div className='w-full md:w-3/4 mx-auto'>
                        <div className='grid justify-center md:flex lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Article Title</p>
                                <input type="text" name='article_title' placeholder="article title" className="input input-bordered w-full" defaultValue={newsTitle}/>
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Short Description</p>
                                <input type="text" name='short_description' placeholder="Short Description" className="input input-bordered w-full" defaultValue={short_description}/>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/4 mx-auto'>
                        <div className='grid md:flex justify-center lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Long Description</p>
                                <input type="text" name='long_description' placeholder="Long Description" className="input input-bordered w-full" defaultValue={long_description}/>
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Your Email (Not Changeable)</p>
                                <input type="email" name='user_email' placeholder="Price" className="input input-bordered w-full" value={user_email} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className='w-3/4 mx-auto'>
                        <div className='grid md:flex justify-center lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Photo of Article</p>
                                <input type="text" name='photo_url1' placeholder="http://news.com/photo.png" className="input input-bordered w-full" defaultValue={photo_url1}/>
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Photo of Article 2</p>
                                <input type="text" name='photo_url2' placeholder="http://news.com/photo.png" className="input input-bordered w-full" defaultValue={photo_url2}/>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto '>

                        <div className='w-full'>
                            <p className='text-left font-semibold  text-xl mb-2'>Tag (Not Changeable)</p>
                            <input type="text" name='tag' placeholder="http://news.com/photo.png" className="input input-bordered w-full" value={tag} readOnly/>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Update Article" className='w-1/2 bg-[#4A00FF] text-white text-xl font-bold py-3 rounded-lg mt-5 mx-auto flex justify-center' />
            </form>
            <Helmet>
                <title>The Khulna News | Update Article</title>
            </Helmet>
        </div>
    );
};

export default UpdateMyArticle;