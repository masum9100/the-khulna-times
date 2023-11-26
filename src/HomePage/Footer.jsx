import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-black mt-10'>
            <footer className="footer p-5 text-white max-w-screen-xl mx-auto">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-5 py-4 border-t text-white max-w-screen-xl mx-auto border-base-300">
                <aside className="items-center ">
                    <img src="logow.png" className='h-24 ' alt="" />
                    <p className='text-xl lg:w-1/2'>We believe that great journalism has the power to make each reader’s life richer and more fulfilling, and all of society stronger and more just.</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <a href="https://twitter.com/30masum" target='_blank' className=''><FaXTwitter></FaXTwitter></a>
                        <a href="https://www.instagram.com/30masum/" target='_blank' className=''><FaInstagram></FaInstagram></a>
                        <a href="https://www.facebook.com/30masum" target='_blank' className=''><FaFacebookF></FaFacebookF></a>
                    </div>
                    
                </nav>
            </footer>
        </div>
    );
};

export default Footer;