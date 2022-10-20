import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Continents</h3>
      <Link href='/'>
        <span className='cursor-pointer block pb-2 mb-3'>Wszystkie posty</span>
      </Link>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className='cursor-pointer block pb-2 mb-3'>
            {category.name}
            {console.log(category)}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
