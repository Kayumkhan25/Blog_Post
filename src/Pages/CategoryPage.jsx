import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div>
            <Header />
            <div className='flex justify-between max-w-[950px] mx-auto mt-10'>
                <div className='bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-md '>
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className='text-lg font-semibold '>
                    Blog Tagged <span className='text-blue-700'>#{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default CategoryPage