import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';



const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError]=useState("")

    const handleGoogle = () => {
        googleSignIn().then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
    }



    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You Logged In Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(location?.state?location.state : '/')
            }) .catch ((err)=>{
                setError("Invalid email or password")
            })
    }


    return (
        <div className='mt-10'>
            <Helmet>
                <title>The Khulna News | SignIn</title>
            </Helmet>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Cz2fRSH/girl-791231-1280.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>

                <div className="hero-content text-center text-neutral-content">

                    <div className="max-w-md">
                        <div className=' py-10'>
                            <div className=" w-full mx-auto p-10 ">
                                <img src="/logow.png" alt="" className='my-10' />
                                <h1 className="text-3xl text-white font-extrabold mb-5">Sign In to Your Account</h1>
                                <form className="" onSubmit={handleLogIn}>
                                    <p className='text-red-500'>{error}</p>
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
                                        <label className="label">
                                            <a href="#" className="label-text-alt link  text-white">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">

                                        <input type="submit" value="Sign In" className=" py-2 rounded-md bg-[#4A00FF] text-white" />
                                    </div>
                                    <div>
                                        <button onClick={handleGoogle} className="flex justify-center items-center mx-auto mt-10 bg-white rounded-full px-8 py-4 text-black">
                                            <svg width="24" height="25" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M45.1381 17.9527H43.3399V17.86H23.2474V26.79H35.8643C34.0236 31.9884 29.0775 35.72 23.2474 35.72C15.85 35.72 9.85236 29.7224 9.85236 22.325C9.85236 14.9276 15.85 8.93 23.2474 8.93C26.662 8.93 29.7685 10.2182 32.1338 12.3223L38.4485 6.00766C34.4612 2.29166 29.1278 0 23.2474 0C10.9184 0 0.922363 9.99602 0.922363 22.325C0.922363 34.654 10.9184 44.65 23.2474 44.65C35.5763 44.65 45.5724 34.654 45.5724 22.325C45.5724 20.8281 45.4183 19.3669 45.1381 17.9527Z" fill="#FFC107" />
                                                <path d="M3.49633 11.9338L10.8312 17.313C12.8159 12.3993 17.6226 8.93 23.2474 8.93C26.662 8.93 29.7685 10.2182 32.1338 12.3223L38.4485 6.00766C34.4612 2.29166 29.1278 0 23.2474 0C14.6723 0 7.23577 4.84118 3.49633 11.9338Z" fill="#FF3D00" />
                                                <path d="M23.2474 44.65C29.0139 44.65 34.2537 42.4432 38.2152 38.8544L31.3056 33.0075C28.9889 34.7694 26.1579 35.7223 23.2474 35.72C17.4406 35.72 12.5102 32.0174 10.6528 26.8503L3.37261 32.4594C7.0674 39.6894 14.5708 44.65 23.2474 44.65Z" fill="#4CAF50" />
                                                <path d="M45.1381 17.9527H43.3399V17.86H23.2474V26.79H35.8643C34.9838 29.2641 33.3978 31.426 31.3022 33.0086L31.3056 33.0064L38.2152 38.8533C37.7262 39.2976 45.5724 33.4875 45.5724 22.325C45.5724 20.8281 45.4183 19.3669 45.1381 17.9527Z" fill="#1976D2" />
                                            </svg>

                                            <span className="text-xl items-center font-bold ml-2">Sign In with Google</span>
                                        </button>
                                    </div>
                                </form>
                                <p className="text-xl mt-10">If you are new please <NavLink to={"/registration"}><span className="text-blue-400 font-bold">Registar here</span></NavLink></p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;