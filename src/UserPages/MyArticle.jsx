import React, { useContext, useEffect, useState } from 'react';
import CardMyArticle from './CardMyArticle';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import { Helmet } from 'react-helmet-async';


const MyArticle = () => {

    // const myArticles = useLoaderData()
    const { user, loading } = useContext(AuthContext)
    const [myArticles, setMyArticles] = useState([])

    useEffect(() => {
        if (!loading) {
            const url = `https://agn12ss-masum9100.vercel.app/newarticle/?user_email=${user.email}`
            fetch(url)
                .then(res => res.json())
                .then(data => setMyArticles(data))
        }
    }, [user.email, loading])


    return (
        <div className='max-w-screen-xl mx-auto'>
            <Helmet>
                <title>The Khulna News | My Article</title>
            </Helmet>
            <div className="hero my-5" style={{ backgroundImage: 'url(https://i.ibb.co/1q2MT8H/collection-newspapers.webp)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className='text-5xl font-bold text-center py-10 '>My Articles</h1>
                    </div>
                </div>
            </div>







            {
                myArticles.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table table-xs mx-auto my-5">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Email</th>
                                    <th>Package</th>
                                    <th>Status</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myArticles.map(myArticle => <CardMyArticle key={myArticle._id} myArticle={myArticle}></CardMyArticle>)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center my-5 relative">
                        
                        <div className=''>
                            
                            <p className='text-3xl font-bold text-red-500'>You didn't add any article yet</p>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default MyArticle;