import React from 'react';

const Author = ({ author }) => {
  return (
    <div className='items-center justify-center mb-8 p-12 bg-black bg-opacity-30 rounded-lg relative mt-20 text-center'>
      <div className='absolute left-0 right-0 -top-16 min-h-min'>
        <img
          alt={author.name}
          height='130px'
          width='130px'
          src={author.photo.url}
          className='self-center rounded-full float-left ml-5'
        />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;
