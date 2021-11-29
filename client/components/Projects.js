import React from 'react';
import { projects } from '../../src/data';

function Projects() {
  console.log('Your data is: ', projects);
  return (
    <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-10 mx-auto inline-block mb-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
            />
          </svg>
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
            Apps I've Built
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            The apps in my current portfolio all feature front-ends built with
            React and Material UI. However, while I used PostgreSQL and
            Sequelize for the back-ends of Bass Shopper and PayUpPal, I
            implemented Etebase for Encryptographs which is an end-to-end
            encrypted backend.
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className='sm:w-1/2 w-100 p-4'
            >
              <div className='flex relative'>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-scale-down object-center'
                  src={project.image}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
                  <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-lg font-medium text-white mb-3'>
                    {project.title}
                  </h1>
                  <p className='leading-relaxed'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
