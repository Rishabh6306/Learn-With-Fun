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
      username: '',
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
    <div className='flex justify-center bg-center border-8 items-center h-screen' style={{backgroundImage: 'url(/Background.jpg)' }}>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='border-y-4 border-white shadow-lg w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 2xl:w-3/12 rounded-3xl p-2 sm:p-5 min-w-max bg-blue-500 border-solid border-[#ffff9b4d]'>

        <div className="flex flex-col items-center">
          <h4 className='text-3xl ssm:text-5xl font-bold m-2 ssm:my-4 sm:mt-0 text-center'>Hello Again!</h4>
          <span className='py-3 text-xl w-60 ssm:max-w-7/12 break-words text-center text-gray-600'>
            Welcome to Learn with Fun!
          </span>
        </div>

        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='flex justify-center py-4'>
            <img src={avatar} className='border-4 border-gray-100 h-32 w-32 ssm:w-36 ssm:h-36 rounded-full shadow-lg cursor-pointer hover:border-gray-200' alt="avatar" />
          </div>

          <div className="flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('username')} className='border-0 px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="text" placeholder='Username' />
            <button className='border-none bg-indigo-700 py-4 rounded-lg text-gray-50 text-xl w-full shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Let's Go</button>
          </div>

          <div className="text-center py-4">
            <span className='text-gray-600'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
          </div>

        </form>

      </div>
    </div>
  );
}