import React from 'react';
import Modal from '../../Modal/Modal';

const FoodItem = ({ foodItem }) => {
    console.log(foodItem);
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = foodItem
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-2/5'><img src={strCategoryThumb} alt="Movie" /></figure>
            <div className="card-body w-3/5">
                <h1 className="text-xl text-left font-bold">{strCategory}</h1>
                <p className="my-4 text-left">{strCategoryDescription.slice(0, 100)}...</p>
                <div className="card-actions">
                    <span className='text-decoration text-yellow-400 text-sm font-bold underline'><a href={`#my-modal-${idCategory}`}>View Details</a> </span>
                </div>
            </div>
            <Modal key={foodItem.idCategory} foodItem={foodItem}></Modal>
        </div>
    );
};
// { `#my-modal-${idCategory}` }
export default FoodItem;