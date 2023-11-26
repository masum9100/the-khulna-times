import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { NavLink } from 'react-router-dom';


const NavBar = () => {


    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, [])
    const twelveHourTime = time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // Use 12-hour time format
    });


    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    return (
        <div className='max-w-screen-xl mx-auto px-5'>
            <div className=' grid justify-center md:flex md:justify-between items-center'>
                <div className='text-center'>
                    <p>{twelveHourTime}</p>
                    <p>{formattedDate}</p>
                </div>
                <div>
                    <img className='max-w-xs md:max-w-md lg:max-w-lg' src="logo.png" alt="" />
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary'>LogIn</button>
                </div>
            </div>

            <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">

                    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to={'/'}><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a></NavLink>
                            </li>
                            
                            <li>
                                <NavLink to={'/all-articles'}><a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">All Articles</a></NavLink>
                            </li>
                            <li>
                                <NavLink to={'/subscription'}><a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Subscription</a></NavLink>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Premium Articles</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Articles</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Articles</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Marquee pauseOnHover={true}>
                <p className='font-bold text-xl'>  :  USD/INR	83.37 <span className='font-light text-green-700'>	0.020004	0.024	</span>  :  EUR/USD	1.0937	 <span className='font-light text-green-700'>	0.0032	0.293448	</span>  :  GBP/INR	104.4757 <span className='font-light text-red-700'>	-0.1875	-0.179146	</span>  :  EUR/INR	90.9494 <span className='font-light text-red-700'>	-0.083496	-0.091721	</span>  :  USD/JPY 149.41 <span className='font-light text-red-700'>	-0.149994	-0.10029	</span>  :  GBP/USD	1.2603	 <span className='font-light text-green-700'>	0.0069	0.550508	</span></p>   
                
            </Marquee>

        </div>

    );
};

export default NavBar;