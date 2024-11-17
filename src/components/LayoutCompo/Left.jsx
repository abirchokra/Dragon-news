import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Left = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then((data) => setCategories(data.data.news_category
        ))
    },[])
    return (
        <div>
            <h2 className='font-semibold mb-2'>All category</h2>
            <div className=' flex flex-col gap-2'>
                {
                   categories.map((category) => <NavLink to={`/category/${category.category_id}`} className='btn p-2 text-start rounded-lg' key={category.category_id}>{category.category_name}</NavLink>)

                }

            </div>
        </div>
    );
};

export default Left;