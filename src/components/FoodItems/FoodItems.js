import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import FoodItem from './FoodItem/FoodItem';

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([])
    useEffect(() => { fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then((response) => response.json()).then((data) => setFoodItems(data.categories)) }, [])
    return (
        <div className='my-20'>
            <h2 className='text-2xl font-bold m-5'>Your Favourite Food</h2>
            <div className='foodItem md:grid md:grid-cols-2 md:px-28 gap-3 '>
                {foodItems.map((foodItem, i) => {
                    if (i < 6) {
                        return (<FoodItem key={foodItem.idCategory} foodItem={foodItem}></FoodItem>)
                    }
                })}
            </div>
            <div className='my-12'>
                <button className="btn btn-warning">Show All</button>
            </div>
        </div>
    );
};

export default FoodItems;