import React, { useEffect } from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

export default function success() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'http://localhost:3000/';
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Urlop Aktywnie</title>
        <meta name='description' content='Blog about travels' />
        <link rel='icon' href='/favicon.ico' />
        <script src='https://js.stripe.com/v3/'></script>
      </Head>

      <div className='grid-cols-6 gap-2'>
        <h1 className='text-3xl font-semibold text-red-600'>
          Coś poszło nie tak ;/
        </h1>
        <p>Wkrótce zostaniesz przekierowany na strone główną :)</p>
      </div>
    </div>
  );
}
