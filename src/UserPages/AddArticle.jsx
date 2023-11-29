import React, { useContext, useState } from 'react';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddArticle = () => {

    const { user } = useContext(AuthContext)
    const [selectedTag, setSelectedTag] = useState('');

    const handleAddArticle = event => {
        event.preventDefault()
        const form = event.target
        const newsTitle = form.article_title.value
        const short_description = form.short_description.value
        const long_description = form.long_description.value
        const user_email = form.user_email.value
        const photo_url1 = form.photo_url1.value
        const photo_url2 = form.photo_url2.value
        const package_status = form.package_status.value
        console.log('Selected Tag:', selectedTag);
        const newArticle = { newsTitle, short_description, long_description, user_email, photo_url1, photo_url2, package_status, tag: selectedTag }
        console.log(newArticle)

        fetch('http://localhost:5001/newarticle', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArticle)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Article Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OKAY'
                    })
                }
            })


    }
    const handleTag = event => {
        event.preventDefault()
        // Update the selectedTag state when the select value changes
        setSelectedTag(event.target.value);
    };
    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <Helmet>
                <title>The Khulna News | Add Article</title>
            </Helmet>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/1q2MT8H/collection-newspapers.webp)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className='text-5xl font-bold text-center py-10 '>Add an Article</h1>
                    </div>
                </div>
            </div>

            <div className='my-4 h-2 bg-[#4A00FF] w-3/4 mx-auto'></div>
            <form onSubmit={handleAddArticle}>
                <div className='grid gap-7'>
                    <div className='w-full md:w-3/4 mx-auto'>
                        <div className='grid justify-center md:flex lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Article Title</p>
                                <input type="text" name='article_title' placeholder="article title" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Short Description</p>
                                <input type="text" name='short_description' placeholder="Short Description" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    <div className='w-3/4 mx-auto'>
                        <div className='grid md:flex justify-center lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Long Description</p>
                                <input type="text" name='long_description' placeholder="Long Description" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Your Email</p>
                                <input type="email" name='user_email' className="input input-bordered w-full" value={user?.email} readOnly />
                            </div>
                        </div>
                    </div>




                    <div className='w-3/4 mx-auto'>
                        <div className='grid md:flex justify-center lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Photo of Article</p>
                                <input type="text" name='photo_url1' placeholder="http://news.com/photo.png" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Photo of Article 2</p>
                                <input type="text" name='photo_url2' placeholder="http://news.com/photo.png" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='w-3/4 mx-auto'>
                        <div className='grid md:flex justify-center lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Package Status</p>
                                <input type="text" name='package_status' placeholder='free/premium' className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold  text-xl mb-2'>Select Tag (Not Changeable)</p>
                                <select className="select select-bordered w-full max-w-xs"
                                    onChange={handleTag}
                                    value={selectedTag}>
                                    <option disabled selected>Select Tag</option>
                                    <option>Economy</option>
                                    <option>Entertainment</option>
                                    <option>Politics</option>
                                    <option>Sports</option>
                                    <option>LifeStye</option>
                                    <option>Technology</option>
                                    <option>International</option>
                                    <option>Environment</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <input type="submit" value="Add an Article" className='w-1/2 bg-[#4A00FF] text-white text-xl font-bold py-3 rounded-lg mt-5 mx-auto flex justify-center' />
            </form>
        </div>
    );
};

export default AddArticle;