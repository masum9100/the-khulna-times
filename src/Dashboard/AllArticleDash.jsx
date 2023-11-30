import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllArtTable from './AllArttable';

const AllArticleDash = () => {
    const allArticles = useLoaderData()
    return (
        <div>
            {
                allArticles.length > 0 ? (
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
                                    <th>Approve</th>
                                    <th>Reject</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allArticles.map(allArticle => <AllArtTable key={allArticle._id} allArticle={allArticle}></AllArtTable>)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center my-5 relative">
                        
                        <div className=''>
                            
                            <p className='text-3xl font-bold text-red-500'>No user added any article</p>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default AllArticleDash;