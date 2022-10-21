import React from 'react';
import Link from 'next/link';

const PostMenu = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-2 py-4 mb-2'>
      <p className='transition duration-500 text-center cursor-pointer hover:text-pink-600 text-sm font-semibold'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </p>
    </div>
  );
};

export default PostMenu;
