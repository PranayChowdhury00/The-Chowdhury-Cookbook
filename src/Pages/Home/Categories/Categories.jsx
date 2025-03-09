import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='mt-10 mb-16 max-w-7xl mx-auto'>
            {/* header */}
            <div className="flex items-center justify-between">
                <h1 className='text-4xl font-bold'>Categories</h1>
                <Link><button className='btn bg-sky-200'>View All Categories</button></Link>
            </div>
            {/* list of foods */}
            <div className=" mt-10 flex gap-5">
                {/* breakfast */}
                <div className="w-1/6 ">
                    <img src="/public/Breakfirst.jpg" alt="" className='rounded-xl'/>
                    <p className='text-xl font-medium text-center py-2'>Breakfast</p>
                </div>
                {/* breakfast */}
                <div className="w-1/6 ">
                    <img src="/public/vegen.jpg" alt="" className='rounded-xl'/>
                    <p className='text-xl font-medium text-center py-2'>Vegan</p>
                </div>
                {/* breakfast */}
                <div className="w-1/6 ">
                    <img src="/public/meat.jpg" alt="" className='rounded-xl'/>
                    <p className='text-xl font-medium text-center py-2'>Meat</p>
                </div>
                {/* breakfast */}
                <div className="w-1/6 ">
                    <img src="/public/sweet.jpg" alt="" className='rounded-xl'/>
                    <p className='text-xl font-medium text-center py-2'>Dessert</p>
                </div>
                {/* breakfast */}
                <div className="w-1/6 ">
                    <img src="/public/launch.jpg" alt="" className='rounded-xl'/>
                    <p className='text-xl font-medium text-center py-2'>Launch</p>
                </div>
                {/* breakfast */}
                <div className="w-1/6 ">
                    <img src="/public/chocolate.jpg" alt="" className='rounded-xl'/>
                    <p className='text-xl font-medium text-center py-2'>Chocolate</p>
                </div>
                
                
            </div>
        </div>
    );
};

export default Categories;