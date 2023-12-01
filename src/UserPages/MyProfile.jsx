import React, { useContext } from 'react';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import { FaRegEdit } from "react-icons/fa";

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='max-w-screen-xl mx-auto mt-10'>
            <div>
                <div className="hero relative" style={{ backgroundImage: 'url(https://i.ibb.co/Cz2fRSH/girl-791231-1280.jpg)' }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className='absolute top-0 right-0 '> 
                            <p className='text-3xl p-2 bg-green-400 rounded-lg m-5'><FaRegEdit></FaRegEdit></p>
                        </div>

                    <div className='flex justify-center gap-10 py-40 items-center'>
                        
                        <div>
                            <img src={user.photoURL} alt="" className='w-48' />

                        </div>
                        <div>
                            <p className='text-3xl font-extrabold text-white'>Name: {user.displayName}</p>
                            <p className='text-3xl font-extrabold text-white mt-10'>Email: {user.email}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;