import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardMyArticle from './CardMyArticle';
import { AuthContext } from '../FirebaseAuth/AuthProvider';

const MyArticle = () => {

    // const myArticles = useLoaderData()
    const { user, loading } = useContext(AuthContext)
    const [myArticles, setMyArticles] = useState([])

    useEffect(() => {
        if (!loading) {
            const url = `http://localhost:5001/newarticle/?user_email=${user.email}`
            fetch(url)
                .then(res => res.json())
                .then(data => setMyArticles(data))
        }
    }, [user.email, loading])


    return (
        <div>
            <div className="hero my-5" style={{ backgroundImage: 'url(https://i.ibb.co/1q2MT8H/collection-newspapers.webp)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className='text-5xl font-bold text-center py-10 '>My Articles</h1>
                    </div>
                </div>
            </div>
            {
                myArticles.map(myArticle => <CardMyArticle key={myArticle._id} myArticle={myArticle}></CardMyArticle>)
            }


        </div>
    );
};

export default MyArticle;