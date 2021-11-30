import React from 'react';

function Footer() {
  return (
    <div>
      <footer className='text-base body-font bg-gray-800'>
        <div className='container px-5 pt-12 m:pb-6 sm:pb-9 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
          <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
            <a className='flex title-font font-medium items-center md:justify-start justify-center text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-10 h-10 text-white p-2 bg-red-700 rounded-full'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                />
              </svg>
              <span className='ml-3 text-xl text-white'>Zoran</span>
            </a>
            <p className='mt-2 text-sm text-white'>Full stack developer</p>
          </div>
          <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
            <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-bold text-white tracking-widest text-md mb-3'>
                <a href='#projects'>Projects</a>
              </h2>
            </div>
            <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-bold text-white tracking-widest text-md mb-3'>
                <a href='#skills'>Skills</a>
              </h2>
            </div>
            {/* <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-bold text-white tracking-widest text-md mb-3'>
                Contact
              </h2>
            </div> */}
            <div className='lg:w-1/3 md:w-1/2 w-full'>
              <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-center'>
                <a
                  className='ml-3 text-gray-200'
                  href='https://twitter.com/ADevToBe'
                >
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                  </svg>
                </a>
                <a
                  className='ml-3 text-gray-200'
                  href='https://www.linkedin.com/in/zoranbajic'
                >
                  <svg
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='0'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke='none'
                      d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                    ></path>
                    <circle cx='4' cy='4' r='2' stroke='none'></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className='bg-gray-800'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center'>
            <p className='text-white text-sm text-center sm:text-left'>
              Copyright © Zoran Bajic {new Date().getFullYear()}
              {'.'}
            </p>
            {/* <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
              <a
                className='ml-3 text-gray-200'
                href='https://twitter.com/ADevToBe'
              >
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                </svg>
              </a>
              <a
                className='ml-3 text-gray-200'
                href='https://www.linkedin.com/in/zoranbajic'
              >
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='0'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='none'
                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                  ></path>
                  <circle cx='4' cy='4' r='2' stroke='none'></circle>
                </svg>
              </a>
            </span> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
