import React from 'react';
import Banner from '../Banner/Banner';
import FoodItems from '../FoodItems/FoodItems';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FoodItems></FoodItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;