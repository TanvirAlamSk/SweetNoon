import React from 'react';
import './BannerItem.css'

const BannerItem = () => {
    return (
        <div className='banner-item px-52 py-36 m-auto'>
            <h2 className='font-bold text-4xl text-white'>Taste Our Delicious<br></br> Best Foods</h2>
            <p className='text-white my-6'><small>There are many variations of passages of Lorem Ipsum available, but the majority have<br></br> suffered alteration in some form, by injected humou.</small></p>
            <input className='border-0 py-3 pl-2 rounded-r-none rounded-lg w-80 -mr-1' placeholder='Search any food'></input><button className=' py-3 bg-yellow-400 rounded-md px-6 border-0 text-black hover:text-white font-semibold'>Search</button>
        </div>
    );
};

export default BannerItem;