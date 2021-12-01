import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [messageInfo, setMessageInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(evt) {
    setMessageInfo({ ...messageInfo, [evt.target.name]: evt.target.value });
  }

  async function Submit(evt) {
    // Prevent the default behavior
    evt.preventDefault();
    // Post the message to 99inbound with their required headers per their docs
    try {
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      const res = await axios.post(
        'https://app.99inbound.com/api/e/GFrmlRV9',
        messageInfo,
        { headers }
      );
      setMessageInfo({
        name: '',
        email: '',
        message: '',
      });
      alert('Your message was successfully sent!');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id='contact' className='relative'>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <form
          name='contact'
          className='lg:w-1/3 md:w-1/2 flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0'
          target='_blank'
          onSubmit={Submit}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-10 mb-4 inline-block self-center'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
          </svg>
          <h2 className='text-white sm:text-4xl text-3xl mb-4 font-medium title-font self-center'>
            Contact Me
          </h2>
          <p className='leading-relaxed mb-5 text-center'>
            I'm open to work so feel free to reach out if you have an
            opportunity that you think would be a good fit!
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm text-gray-400'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={messageInfo.name}
              onChange={handleChange}
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-400'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={messageInfo.email}
              onChange={handleChange}
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-sm text-gray-400'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={messageInfo.message}
              onChange={handleChange}
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 foucs:outline-none hover:bg-indigo-600 rounded text-lg'
          >
            Send
          </button>
          <div style={{ position: 'absolute', left: '-5000px' }}>
            <input
              type='checkbox'
              name='splendid_chiffon_fractal_shirt'
              value='1'
              tabIndex='-1'
              autoComplete='no'
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
