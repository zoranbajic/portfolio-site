import React from 'react';

function Navbar() {
  return (
    <header className='bg-gray-800 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div className='title-font font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className='ml-3 text-xl'>
            Zoran Bajic
          </a>
        </div>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
          <a href='#projects' className='mr-5 hover:text-white'>
            Projects
          </a>
          <a href='#skills' className='mr-5 hover:text-white'>
            Skills
          </a>
        </nav>
        <a
          href='#contact'
          className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'
        >
          Contact Me
        </a>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4 ml-1'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </header>
  );
}

export default Navbar;
