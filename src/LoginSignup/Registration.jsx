import React from 'react';
import { NavLink } from 'react-router-dom';



const Registration = () => {


   

    return (
        <div className='mt-10'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/sgydGyv/roman-kraft-Zua2hyv-TBk-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                
                <div className="hero-content text-center text-neutral-content">
                    
                    <div className="max-w-md">
                        <div className=' py-10'>
                            <div className=" w-full  mx-auto p-10">
                            <img src="/logow.png" alt="" className='my-10'/>
                                <h1 className="text-3xl text-white font-extrabold mb-5">Create New Account</h1>
                                <form >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" name="name" className="input input-bordered text-[#4A00FF]" required />
                                        
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Photo URL</span>
                                        </label>
                                        <input type="text" placeholder="photo url" name="photoURL" className="input input-bordered text-[#4A00FF]" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" className="input input-bordered text-[#4A00FF]" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name="password" className="input input-bordered text-[#4A00FF]" required />
                                    </div>
                                    {/* <p className="text-red-500">{error}</p> */}
                                    <div className="form-control mt-6">
                                        <button type="submit" className="py-2 rounded-md bg-[#4A00FF] text-white">Sign Up</button>
                                    </div>
                                </form>
                                <p className="text-xl mt-10">Already have an account? <NavLink to={"/login"}><span className="text-blue-400 font-bold">Log In here</span></NavLink></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;