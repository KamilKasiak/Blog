import React, { useRef } from 'react';
import moment from 'moment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { RichText } from '@graphcms/rich-text-react-renderer';

const PostDetail = ({ post }) => {
  const postRef = useRef();

  // console.log(post.content.raw.children);

  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top h-full w-full rounded-t-lg'
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
          <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img
              alt={post.author.name}
              height='40px'
              width='40px'
              className='align-middle rounded-full'
              src={post.author.photo.url}
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>
              {post.author.name}
            </p>
          </div>
          <div className='text-sm text-gray-700 md:min-w-fit '>
            <DateRangeIcon style={{ color: '#A34CA2' }} />
            <span className='ml-1'>
              {moment(post.createdAt).format('DD MMM, YYYY')}
            </span>
          </div>
          <div className='text-sm text-gray-700 px-4 md:min-w-fit'>
            <FlightTakeoffIcon style={{ color: '#A34CA2' }} />
            <span className='ml-1'>
              {moment(post.tripDate).format('MMM YYYY')}
            </span>
          </div>
        </div>
        <h1 className='mb-8 text-3xl font-semibold'> {post.title}</h1>

        <React.Fragment>
          {/* <RichText content={post.content.raw.children} /> */}

          <RichText
            content={post.content.raw.children}
            references={postRef}
            renderers={{
              h1: ({ children }) => (
                <h1 className={`text-4xl font-semibold`}>
                  <br />
                  <br />
                  {children} <br />
                  <br />
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className={`text-2xl font-semibold`}>
                  <br />
                  {children}
                  <br />
                  <br />
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className={`text-lg font-semibold`}>
                  <br />
                  <br />
                  {children}
                  <br />
                  <br />
                </h3>
              ),
              a: ({ children, href, openInNewTab }) => (
                <a
                  href={href}
                  target={openInNewTab ? '_blank' : '_self'}
                  style={{ color: '#bc2cae' }}
                  rel='noreferrer'
                >
                  {children}
                </a>
              ),
              bold: ({ children }) => <strong>{children}</strong>,
              Asset: {
                text: () => (
                  <div>
                    <p>text plain</p>
                  </div>
                ),
              },
            }}
          />
        </React.Fragment>
      </div>
    </div>
  );
};

export default PostDetail;
