import React from 'react';
import { useRouter } from 'next/router';
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  BuyMeCoffe,
} from '../../components';
import Loader from 'react-loaders';
import { getPosts, getPostDetails } from '../../services';

function Loading() {
  const router = useRouter();
  if (router.isFallback) {
    console.log('is fallback: true');
    return (
      <Loader type='ball-rotate' height={100} width={100} timeout={2000} />
    );
  }
}

const PostDetails = ({ post }) => {
  return (
    <>
      <Loading />
      <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            <PostDetail post={post} />
            <BuyMeCoffe />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className='col-span-1 lg:col-span-4 '>
            <div className='relative lg:sticky top-8'>
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}
