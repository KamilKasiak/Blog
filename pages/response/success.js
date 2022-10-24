import Image from 'next/image';
import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import thankYou from '../../public/thankYou.jpg';

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
        <h1 className='text-3xl font-semibold text-lime-600 mb-2'>
          Dziękuję za kawę!
        </h1>
        <div className=''>
          <Image src={thankYou} className='absolute object-cover' />
        </div>

        <p className='text-xl'>
          Wkrótce zostaniesz przekierowany na strone główną :)
        </p>
      </div>
    </div>
  );
}
