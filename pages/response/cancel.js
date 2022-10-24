import React, { useEffect } from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import sadCat from '../../public/sadCat.jpg';
import Image from 'next/image';

export default function success() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'http://urlopaktywnie.pl/';
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='flex flex-col gap-2 justify-items-center content-center items-center'>
        <h1 className='text-3xl font-semibold text-red-600 mb-2'>
          Coś poszło nie tak :(
        </h1>
        <div className=''>
          <Image src={sadCat} className='absolute object-cover' />
        </div>

        <p className='text-xl'>
          Wkrótce zostaniesz przekierowany na strone główną.
        </p>
      </div>
    </div>
  );
}
