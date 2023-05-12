import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mx-24 ">
            <div>
                <span className="footer-title text-black">Section</span>
                <a className="link link-hover text-semibold">Home</a>
                <a className="link link-hover">Features</a>
                <a className="link link-hover">Pricing</a>
                <a className="link link-hover">FAQs</a>
                <a className="link link-hover">About</a>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">UIUX Design</a>
                <a className="link link-hover">Product Design</a>
                <a className="link link-hover">Back End Developer</a>
                <a className="link link-hover"> Front End Developer</a>
            </div>
            <div>
                <span className="footer-title">Resource</span>
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">Support</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms of Service</a>
            </div>
            <div>
                <span className="footer-title">Subscribe to our newsletter</span>
                <p className="text-left">There are many variations of passages of available,<br></br> but the majority have suffered</p>
                <div className='flex'>
                    <input className='border-2 pl-2 py-1 border-gray-400 rounded-lg' placeholder='Email address'></input><button className=' py-3 bg-yellow-400 rounded-md px-6 border-2  text-black hover:text-white font-semibold'>Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;