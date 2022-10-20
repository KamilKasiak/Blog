import React, { useEffect, useState } from 'react';
import { Layout } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import { useRouter } from 'next/router';
import Loader from 'react-loaders';

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 1000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // return () => {
    //   router.events.off('routeChangeStart', handleStart);
    //   router.events.off('routeChangeComplete', handleComplete);
    //   router.events.off('routeChangeError', handleComplete);
    // };
  });

  return (
    loading && (
      <Loader type='ball-rotate' height={100} width={100} timeout={3000} />
    )
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
