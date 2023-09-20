// Import necessary libraries and components
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from './assests/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from './Utils/ValidateUtils';
import { useAuthStore } from './store/store';

// Define the Username component
export default function Username() {
  // Get the navigate function and setUsername from the auth store
  const navigate = useNavigate();
  const setUsername = useAuthStore(state => state.setUsername);

  // Formik configuration for the username form
  const formik = useFormik({
    initialValues: {
      username: 'example123',
    },
    validate: usernameValidate, // Username validation function
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      // Set the username in the auth store and navigate to the password page
      setUsername(values.username);
      navigate('/password');
    },
  });

  // JSX for the Username component
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className='border-4 border-gray-50 shrink-0 h-3/4 w-[30%] rounded-3xl py-20 px-7 min-w-max rouded-2xl bg-[#ffffff8c] border-solid border-[#ffff9b4d]'>

          <div className="title flex flex-col items-center">
            <h4 className={'text-5xl font-bold'}>Hello Again!</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={avatar} className='border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer hover:border-gray-200' alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('username')} className=' border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='Username' />
              <button className='border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Let's Go</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}