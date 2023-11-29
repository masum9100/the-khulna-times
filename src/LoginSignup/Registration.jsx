import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import Swal from 'sweetalert2';



const Registration = () => {

    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
    const { signUp, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()



    const onSubmit = data => {
        console.log(data)
        signUp(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('hello update')
                        reset()
                        Swal.fire({
                            title: 'Success!',
                            text: 'You Register Successfully',
                            icon: 'success',
                            confirmButtonText: 'OKAY'
                        })
                    })
                    navigate('/')

            }).catch((error) => {
                console.error(error);
            })
    }





    return (
        <div className='mt-10'>
            <Helmet>
                <title>The Khulna News | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/sgydGyv/roman-kraft-Zua2hyv-TBk-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>

                <div className="hero-content text-center text-neutral-content">

                    <div className="max-w-md">
                        <div className=' py-10'>
                            <div className=" w-full  mx-auto p-10">
                                <img src="/logow.png" alt="" className='my-10' />
                                <h1 className="text-3xl text-white font-extrabold mb-5">Create New Account</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" name="name" {...register("name", { required: true })} className="input input-bordered text-[#4A00FF]" />
                                        {errors.name && <span className='text-red-400'>Name is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Photo URL</span>
                                        </label>
                                        <input type="text" placeholder="photo url" name="photoURL" {...register("photoURL", { required: true })} className="input input-bordered text-[#4A00FF]" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="input input-bordered text-[#4A00FF]" />
                                        {errors.email && <span className='text-red-400'>Email is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name="password" {...register("password", {
                                            required: true, minLength: 6,
                                            pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
                                        })} className="input input-bordered text-[#4A00FF]" />
                                        {errors.password?.type === 'required' && <span className='text-red-400'>Password is required</span>}
                                        {errors.password?.type === 'minLength' && <span className='text-red-400'>Use Min 6 Character</span>}
                                        {errors.password?.type === 'pattern' && <span className='text-red-400'>Use one uppercase letter, one lowercase letter, one number and special character.</span>}
                                    </div>

                                    <div className="form-control mt-6">

                                        <input type="submit" value="Sign Up" className="py-2 rounded-md bg-[#4A00FF] text-white" />
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