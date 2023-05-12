import React from 'react';
import './Navbar.css'
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className="header  bg-violet-300 md:px-28 flex py-0 md:justify-around items-center sm:flex-none sm:flex-row">
            <div className="flex-1 sm:text-center my-0 py-0">
                <a href='#' className=" normal-case" >
                    <img className='rounded-lg' src={logo} alt=""></img>
                </a>
            </div>
            <div className='sm:my-5 lg:my-2'>
                <ul className='flex justify-center'>
                    <li className='mr-5 py-2 px-5 bg-violet-500 text-white rounded-md'><a href='/home'>Home</a></li>
                    <li className='mr-5 py-2 px-5 bg-violet-500 text-white rounded-md'><a href='/about'>About</a></li>
                    <li className='mr-5 py-2 px-5 bg-violet-500 text-white rounded-md'> <a href='/contract'>Contract</a></li>
                </ul>
            </div>
            <div className="flex-none my-0 ml-10">
                <input className='border-0 py-3 rounded-lg w-72 mr-1 pl-2' placeholder='Enter Email'></input>
                <button className="btn bg-yellow-400 px-6 border-0 text-black hover:text-white">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Navbar;