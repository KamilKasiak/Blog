import React from 'react';
import moment from 'moment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-two':
        return (
          <h2 key={index} className='text-2xl font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case 'heading-three':
        return (
          <h3 key={index} className='text-xl font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'heading-four':
        return (
          <h4 key={index} className='text-md font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'heading-five':
        return (
          <h5 key={index} className='text-sm font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h5>
        );
      case 'paragraph':
        return (
          <p key={index} className='mb-8'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );

      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

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
        {/* {console.log(post.content.raw)} */}
        {post.content.raw.children.map((typeObj, index) => {
          {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          }
        })}
      </div>
    </div>
  );
};

export default PostDetail;
