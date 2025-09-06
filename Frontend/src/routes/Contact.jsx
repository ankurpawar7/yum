import React from 'react';

const Contact = () => {
  return (
    <div className='max-w-md mx-auto p-5 text-center'>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <p className='mb-4'>
        We’d love to hear from you! For inquiries, feedback, or support, please
        reach out to us:
      </p>
      <div className='mb-2'>
        <strong>Email:</strong>{' '}
        <a href='mailto:support@yum.com' className='text-blue-500'>
          support@yum.com
        </a>
      </div>
      <div className='mb-2'>
        <strong>Phone:</strong>{' '}
        <span className='text-gray-600'>(123) 456-7890</span>
      </div>
      <div className='mb-2'>
        <strong>Social Media:</strong>
        <div className='flex justify-center space-x-4 mt-2'>
          <a
            href='https://facebook.com/yum'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600'
          >
            Facebook
          </a>
          <a
            href='https://instagram.com/yum'
            target='_blank'
            rel='noopener noreferrer'
            className='text-pink-600'
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
