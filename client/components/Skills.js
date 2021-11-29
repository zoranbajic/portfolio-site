import React from 'react';
import { skills } from '../../src/data';

function Skills() {
  return (
    <section id='skills'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='text-center mb-20'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-10 mb-4 inline-block'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
            />
          </svg>
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
            Skills &amp; Technologies
          </h1>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
            My experience so far has been in the PERN stack, specifically React,
            Node, PostgreSQL, and Express. Having a huge interest in privacy and
            security though, I also have experience in Etebase which is an
            end-to-end encrypted back-end. On the front-end, I've mostly used
            Material UI however for this site I've used Tailwind CSS and really
            enjoyed the greater control it gives you.
          </p>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
          {skills.map((skill) => (
            <div key={skill} className='p-2 sm:w-1/2 w-full'>
              <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-green-400 flex-shrink-0 mr-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                  />
                </svg>
                <span className='title-font font-medium text-white'>
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
