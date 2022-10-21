import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories, getCategoryPost } from '../services';
import { PostMenu } from '../components';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [continentExpanded, setContinentExpanded] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));

    document.addEventListener('click', function (e) {
      if (document.getElementById('continent-name').contains(e.target)) {
      } else {
        setContinentExpanded(false);
      }
    });
  }, []);

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              Urlop Aktywnie
            </span>
          </Link>
        </div>
        <div
          id='continent-name'
          className='hidden md:float-left md:contents md:relative'
        >
          {categories.map((category, index) => (
            <div>
              {/* <Link key={category.slug} href={`/category/${category.slug}`}> */}
              <span
                className='md: float-right mt-2 align-middle text-white ml-4 font-semibold text-sm cursor-pointer'
                onClick={() => {
                  setContinentExpanded((prev) => !prev);
                  getCategoryPost(`${category.slug}`).then((newPost) =>
                    setPosts(newPost)
                  );
                }}
              >
                {category.name}
              </span>
              {/* </Link> */}
            </div>
          ))}
          {continentExpanded ? (
            <div className='relative flex w-screen justify-end right-60 z-50'>
              <div className='absolute bg-white shadow-lg rounded-lg py-4 px-6 mb-4 pb-4 w-1/5'>
                <h3 className='text-xl mb-3 font-semibold border-b pb-2 px-2'>
                  Countries
                </h3>
                {posts.map((post, index) => (
                  <div
                    onClick={() => {
                      setContinentExpanded(false);
                    }}
                  >
                    <PostMenu key={index} post={post.node} />{' '}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
