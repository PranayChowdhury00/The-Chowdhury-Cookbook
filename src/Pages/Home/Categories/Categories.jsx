import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='mt-10 mb-16 max-w-7xl mx-auto px-5'>
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <h1 className='text-3xl sm:text-4xl font-bold'>Categories</h1>
                <Link>
                    <button className='btn bg-sky-200 px-4 py-2 text-sm sm:text-base rounded-md hover:bg-sky-300'>
                        View All Categories
                    </button>
                </Link>
            </div>

            {/* Categories Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                {[
                    { name: "Breakfast", img: "/public/Breakfirst.jpg" },
                    { name: "Vegan", img: "/public/vegen.jpg" },
                    { name: "Meat", img: "/public/meat.jpg" },
                    { name: "Dessert", img: "/public/sweet.jpg" },
                    { name: "Lunch", img: "/public/launch.jpg" },
                    { name: "Chocolate", img: "/public/chocolate.jpg" },
                ].map((category, index) => (
                    <div key={index} className="w-full">
                        <img 
                            src={category.img} 
                            alt={category.name} 
                            className='rounded-xl w-full h-28 sm:h-32 object-cover' 
                        />
                        <p className='text-lg sm:text-xl font-medium text-center py-2'>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
