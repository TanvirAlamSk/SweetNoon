import React from 'react';

const Modal = ({ foodItem }) => {
    console.log(foodItem);
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = foodItem
    return (
        <div className="modal overflow-auto" id={`my-modal-${idCategory}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='w-full'><img src={strCategoryThumb} alt="Movie" /></figure>
                <div className="card-body">
                    <h1 className="text-xl text-left font-bold">{strCategory}</h1>
                    <p className="my-4 text-left">{strCategoryDescription}</p>
                    <div className="modal-action">
                        <a href="#" className="btn bg-red-500 text-white border-0">Close</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;