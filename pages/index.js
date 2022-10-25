import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { PostCard, Categories, PostWidget } from '../components';
import { FeaturedPosts } from '../sections';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Urlop Aktywnie</title>
        <meta name='description' content='Blog about travels' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

//FETCH DATA WITH NEXT.JS - normally useEffect did that job
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
